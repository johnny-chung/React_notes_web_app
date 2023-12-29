import React from 'react'

function SortClear({ itemDetails, sortItems, clearItems }) {

    function handleChange(event) {
        const { value } = event.target
        sortItems(value)
    }

    return (
        <>
            <select
                name='sort'
                onChange={handleChange}
            >
                <option value="clearSort">Sort by input order</option>
                {itemDetails.map(elem => {
                    return (
                        <option value={elem.name}>{elem.name}</option>
                    )
                })}

            </select>
            <button onClick={clearItems}>Clear All Record</button>
        </>
    )
}

export default SortClear;