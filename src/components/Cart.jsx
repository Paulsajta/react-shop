import './CartStyle.css'
import Dropped from "./Dropped";
import {useEffect} from "react";

function Cart({total, onClick, isDropped, cb, droppedItem = {}}) {

    /**
     * @param droppedItem.displayAssets[0]  different pictures.
     * @param {{full_background : string}} data backgroundPic.
     */

    let pic = ''
    if (droppedItem) {
        pic = droppedItem.displayAssets[0].full_background
    }

    // const [showDropped, setShowDropped] = useState(false)

    useEffect(() => {
        if (isDropped) {
        const timerId = setInterval(() => {
            cb()
        }, 300)

            return () => {
                clearInterval(timerId)
            }
        }
    }, [droppedItem])

    return (
        <div className='cart' onClick={onClick}>
            <i className="medium material-icons" style={{borderBottom: '1px solid black'}}>shopping_basket</i>
            <p>{total}</p>
            {isDropped ? <Dropped pic={pic}/> : ''}
        </div>
    );
}

export default Cart;