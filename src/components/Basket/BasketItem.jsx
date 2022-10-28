import React, {useContext} from 'react';
import './BasketItem.css'
import {customContext} from "../../MyContext";

function BasketItem({elem}) {

    const {mainId, displayName} = elem.item
    const {background} = elem.item.displayAssets[0]
    const {finalPrice} = elem.item.price

    const {deleteFromBasket, incrementCount, decrementCount} = useContext(customContext)

    const deleteItem = () => {
        deleteFromBasket(mainId)
    }

    return (
        <>
            <td><img width={'40px'} src={background} alt=""/></td>
            <td>{displayName}</td>
            <td><button className='btn btn-small' onClick={() => decrementCount(mainId, elem.item)}>{'<'}</button></td>
            <td>{elem.count}</td>
            <td><button className='btn btn-small' onClick={() => incrementCount(mainId, elem.item)}>{'>'}</button></td>
            <td><button className='btn btn-small pink darken-1' onClick={deleteItem}>{'x'}</button></td>
            <td>{elem.count * finalPrice}$</td>
        </>
    );
}

export default BasketItem;