import React from 'react';
import Item from "./Item";

function GoodsList({goods = [], cb, basket}) {

    /**
     * @param elem.mainId id of current element
     */

    return (
        <div className='Content'>
            {
                goods.length > 2 ? goods.map(elem => {
                    return <Item key={elem.mainId} elem={elem} cb={cb} basket={basket}/>
                }) : <h1></h1>
            }
        </div>
    );
}

export default GoodsList;