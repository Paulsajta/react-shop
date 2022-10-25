import React, {useEffect, useState} from 'react';
import {API_URL} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import ModalCart from "./ModalCart/ModalCart";
import Basket from "./Basket/Basket";

function Content(props) {

    const [goods, setGoods] = useState([])

    const [loading, setLoading] = useState(false)

    const [basket, setBasket] = useState({})
    const [droppedItem, setDroppedItem] = useState('')
    const [isDropped, setIsDropped] = useState(false)

    const [total,setTotal] = useState(0)
    const [modalActive, setModalActive] = useState(false)


    const addToBasket = (item, count) => {
        const {mainId} = item

        if (basket[`${mainId}`]) {
            let count = basket[`${mainId}`].count + 1
            setBasket({...basket, [`${mainId}`] : {item, count}})
        }
        else {
            setBasket({...basket, [`${mainId}`]: {item,count}})
        }
        setDroppedItem(item)
        setIsDropped(true)
    }

    const unDropped = () => {
        setIsDropped(!isDropped)
    }

    const isItInBasket = (id) => {
        if (basket[`${id}`]) {
            return true
        }
    }

    const onModal = () => {
        setModalActive(true)
    }

    const offModal = () => {
        document.querySelector('body').style.overflow = 'scroll'
        setModalActive(false)
    }

    const deleteFromBasket = (id) => {
        let resBasket = {...basket}
        delete resBasket[`${id}`]
        setBasket(resBasket)
    }

    const more = (id, item) => {
        let count = basket[`${id}`].count + 1
        setBasket({...basket, [`${id}`] : {item, count}})

    }

    const less = (id,item) => {
        if (basket[`${id}`].count > 0) {
            let count = basket[`${id}`].count - 1
            setBasket({...basket, [`${id}`] : {item, count}})
        }
        else if (basket[`${id}`].count === 0){
            deleteFromBasket(id)
        }
    }

    const basketFunctions = {
        deleteFromBasket,
        more,
        less,
    }


    useEffect(() => {
        let sumItems = 0
        for (let elem in basket) {
            sumItems = sumItems + basket[elem].count
        }
        setTotal(sumItems)
    },[basket])

    useEffect(() => {
        setLoading(true)
        fetch(API_URL, {
            headers: { Authorization : `dbe8c43d-79919ca2-0dc78c25-4b242c92`}
        })
            .then(resp => resp.json())
            .then(data => {
                    const {shop} = data
                   return setGoods(shop)
                }
            )
            .catch(() => setGoods(['ERROR']))
            .then(() => setLoading(false))
    }, [])

    return (
        <>
            <ModalCart active={modalActive} changeActive={offModal}>
                <Basket basket={basket} cb={basketFunctions}/>
            </ModalCart>
            <Cart total={total} isDropped={isDropped} cb={unDropped} onClick={onModal} droppedItem={droppedItem}/>

            {
                loading
                    ? <Preloader/>
                    : <GoodsList
                        goods={goods}
                        cb={addToBasket}
                        isItInBasket={isItInBasket}
                        basket={basket}
                        {...props}
                    />
            }
        </>
    );
}

export default Content;