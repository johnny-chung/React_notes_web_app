import React, { useState } from 'react';

import AddForm from './AddForm.jsx'
import Item from './Item.jsx'
import SortClear from './SortClear.jsx'
import Status from './Status.jsx'

function List() {
    // item: {num: 1 , name: 'apple' , packed: false}
    const [items, setItems] = useState([]);

    const [sortPara, setSortPara] = useState("clearSort");

    function handleAddItem(newItem) {
        setItems((prev) => ([
            ...prev,
            newItem
        ]
        ))
    }

    function handleDeleteItem(targetIdx) {
        setItems((prev) => {
            return (
                prev.filter((item, index) => index !== targetIdx)
            )
        })
    }

    function handleSortItem(name) {
        setSortPara(name)
    }

    function handlePackItem(target_idx) {

        setItems(prev => {
            return (
                prev.map((item, idx) => {
                    return ({
                        ...item,
                        'packed': idx === target_idx ? !item.packed : item.packed
                    })
                })
            )
        })
    }

    function handleClearItems() {
        setItems([])
    }

    return (
        <>
            <AddForm
                addItem={handleAddItem}
            />
            <div className='list'>
                <ul>
                    {items.map((item, idx) => {
                        if (sortPara !== "clearSort" && item.name !== sortPara)
                            return null
                        return (
                            <Item
                                key={idx}
                                idx={idx}
                                itemDetails={item}
                                deleteItem={handleDeleteItem}
                                packItem={handlePackItem}
                            />
                        )
                    })}
                </ul>
                <SortClear
                    itemDetails={items}
                    sortItems={handleSortItem}
                    clearItems={handleClearItems}
                />
            </div>
            <Status items={items} />
        </>
    )
}

export default List;