import React, {useContext} from 'react';
import Item from "./Item";
import {customContext} from "../MyContext";

function GoodsList() {

    /**
     * @param elem.mainId id of current element
     */
    const {goods} = useContext(customContext)

    return (
        <div className='Content'>
            {
                goods.length > 2 ? goods.map(elem => {
                    return <Item key={elem.mainId} elem={elem}/>
                }) : <h1></h1>
            }
        </div>
    );
}

export default GoodsList;