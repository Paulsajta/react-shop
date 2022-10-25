import React, {useEffect, useState} from 'react';
import BasketItem from "./BasketItem";

function Basket({basket = {}, cb}) {

    /**
     * @param item.price the price of current item
     */

    const [total, setTotal] = useState()

    useEffect(() => {
        let sum = 0
        {Object.keys(basket).map(key => {
             sum = sum + (basket[key].item.price.finalPrice * basket[key].count)
        })}
        setTotal(sum)
    })

    return (
        <>
        <table className='basket'>
            <tbody>
            {Object.entries(basket).map(key => {

                return <tr key={key[0]}><BasketItem elem={key[1]} cb={cb}/></tr>
            })}
            <tr><td colSpan={7} style={{textAlign: "right"}}>Total: {total}$</td></tr>
            </tbody>
        </table>
        </>
    );
}

export default Basket;