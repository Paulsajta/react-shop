import React, {useContext, useEffect, useState} from 'react';
import {API_URL} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import ModalCart from "./ModalCart/ModalCart";
import Basket from "./Basket/Basket";
import {customContext} from "../MyContext";

function Content() {

    const {setGoods, loading, setLoading, basket} = useContext(customContext)
    const [total,setTotal] = useState(0)

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
            <ModalCart>
                <Basket/>
            </ModalCart>
            <Cart total={total}/>

            {
                loading
                    ? <Preloader/>
                    : <GoodsList/>
            }
        </>
    );
}

export default Content;