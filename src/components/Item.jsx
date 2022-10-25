import React, { useEffect, useState} from 'react';
import './item.css'


function Item({elem, basket, cb}) {

    /**
     * @param price.finalPrice prices for current item
     */


    const {displayName, mainId, price, displayAssets, displayDescription} = elem

    const [count, setCount] = useState(0)
    const [inItemCount, setInItemCount] = useState(0)
    const [sendToBasket, setSendToBasket] = useState(false)

    const [itemIsInBasket, setItemInBasket] = useState(false)




    const click = () => {
        if (count === 0) {
            setCount(count + 1)
            setSendToBasket(!sendToBasket)
        }
        else {
            setSendToBasket(!sendToBasket)
        }
    }

    const more = () => {
        setCount(count + 1)
        setInItemCount(inItemCount + 1)
    }

    const les = () => {
        if (count > 1 ) {
            setCount(count - 1)
            setInItemCount(inItemCount - 1)
        }
    }

    const cleanCount = () => {
        setCount(0)
        setInItemCount(0)
    }

    useEffect(() => {
        if (basket[`${mainId}`]) {
            setItemInBasket(true)
        }
        else {
            setItemInBasket(false)
        }

    }, [basket])

    useEffect(() => {
        if (count > 0) {
            cb(elem, count)
            setCount(0)
            setInItemCount(0)
        }
    }, [sendToBasket])

    return (
        <div className='items'>
            <div className="card">

                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="activator" src={displayAssets[0].full_background}/>

                </div>

                <div className='item-info'>
                    <div className="card-content">

                        <button className='btn' data-item={mainId} onClick={click}>
                            {inItemCount > 0 ? 'ADD' : 'BUY'}
                        </button>
                        <span className='right' style={{fontSize: '1.5rem'}}> {price.finalPrice} $</span>


                        <div className='isInBasket'>{itemIsInBasket ? '---item is in basket---' : <hr style={{marginTop: '10px'}}/>}</div>
                        <span className="card-title activator grey-text text-darken-4">{displayName}</span>
                        <p>{displayDescription}</p>

                    </div>

                    <div className="card-action">

                        <div>
                            <div className='quantity'>
                                <button className='btn btn-small' onClick={les}>{'<'}</button>
                                {inItemCount}
                                <button className='btn btn-small' onClick={more}>{'>'}</button>
                                <button className='btn btn-small pink darken-1' onClick={cleanCount}>{'x'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;