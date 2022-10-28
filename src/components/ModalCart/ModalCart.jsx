import React, {useContext} from 'react';
import classes from './cartStyle.module.css'
import {customContext} from "../../MyContext";

function ModalCart({children}) {

    const {modalActive, offModal} = useContext(customContext)

    const style = [classes.cartModal]
    if (modalActive) {
        document.querySelector('body').style.overflow = 'hidden'
        style.push(classes.active)
    }
    return (
        <div className={style.join(' ')} onClick={offModal}>
            <div className={classes.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalCart;