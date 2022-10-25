import React from 'react';
import classes from './cartStyle.module.css'

function ModalCart({children, active, changeActive}) {

    const style = [classes.cartModal]
    if (active) {
        document.querySelector('body').style.overflow = 'hidden'
        style.push(classes.active)
    }
    return (
        <div className={style.join(' ')} onClick={changeActive}>
            <div className={classes.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalCart;