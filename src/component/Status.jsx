import React from 'react'

function Status({ items }) {

    const totalCnt = items.length;
    let packedCnt = 0;
    items.forEach(item => {
        if (item.packed) packedCnt++
    });

    return (
        <div className='stats'>
            <p>You have {totalCnt} on your list, and you already packed {packedCnt}
                ({totalCnt !== 0 ? (packedCnt / totalCnt * 100).toFixed(0) : 0}%)</p>
        </div>
    )

}

export default Status;