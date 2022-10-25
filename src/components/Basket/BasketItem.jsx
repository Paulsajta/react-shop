import React from 'react';
import './BasketItem.css'

function BasketItem({elem, cb}) {

    const {more, less, deleteFromBasket} = cb
    const {mainId, displayName} = elem.item
    const {background} = elem.item.displayAssets[0]
    const {finalPrice} = elem.item.price

    const deleteItem = () => {
        deleteFromBasket(mainId)
    }


    return (
        <>
            <td><img width={'40px'} src={background} alt=""/></td>
            <td>{displayName}</td>
            <td><button className='btn btn-small' onClick={() => less(mainId, elem.item)}>{'<'}</button></td>
            <td>{elem.count}</td>
            <td><button className='btn btn-small' onClick={() => more(mainId, elem.item)}>{'>'}</button></td>
            <td><button className='btn btn-small pink darken-1' onClick={deleteItem}>{'x'}</button></td>
            <td>{elem.count * finalPrice}$</td>
        </>
    );
}

export default BasketItem;