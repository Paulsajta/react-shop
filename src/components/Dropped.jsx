import React from 'react';

function Dropped({pic}) {
    return (
        <div className='droppedPic'><img src={pic} alt="" className='dropped'/></div>
    );
}

export default Dropped;