import React, {useContext} from 'react';
import {customContext} from "../MyContext";

function Dropped() {

    const {isDropped, droppedItem} = useContext(customContext)
    let pic = ''
    if (isDropped) {
        pic = droppedItem.item.displayAssets[0].full_background
    }


    return (
        <div className='droppedPic'>
            <img src={pic} alt="" className='dropped'/>
        </div>
    );
}

export default Dropped;