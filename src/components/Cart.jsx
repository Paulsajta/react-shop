import './CartStyle.css'
import Dropped from "./Dropped";
import {useContext, useEffect} from "react";
import {customContext} from "../MyContext";
import {clear} from "@testing-library/user-event/dist/clear";

function Cart({total}) {

    /**
     * @param droppedItem.displayAssets[0]  different pictures.
     * @param {{full_background : string}} data backgroundPic.
     */

    const {onModal, setIsDropped, isDropped} = useContext(customContext)


    useEffect(() => {
        if (isDropped) {
        const timerId = setTimeout(() => {
            setIsDropped(false)
        }, 300)

            return () => {
                clearTimeout(timerId)
            }
        }
    }, [isDropped])

    return (
        <>
        <div className='cart' onClick={onModal}>
            <i className="medium material-icons" style={{borderBottom: '1px solid black'}}>shopping_basket</i>
            <p>{total}</p>
        </div>
            {isDropped ? <Dropped/> : ''}
        </>
    );
}

export default Cart;