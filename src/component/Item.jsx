import React, { useState } from 'react';

function Item({ idx, itemDetails, deleteItem, packItem }) {


    function handleClick() {
        packItem(idx)
    }

    function handleDelete() {
        deleteItem(idx)
    }

    return (
        <li>
            <input
                type='checkbox'
                onClick={handleClick}
            />
            <p style={itemDetails.packed ? { textDecoration: 'line-through' } : {}} >
                {itemDetails.num} {itemDetails.name}
            </p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Item;