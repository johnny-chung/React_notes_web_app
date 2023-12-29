import React, { useState } from 'react'

function AddForm({ addItem }) {

    const [item, setItem] = useState({ num: 1, name: '', packed: false })


    function handleOnChange(event) {
        const { name, value } = event.target
        setItem(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleAddItem(event) {
        addItem(item);
        event.preventDefault();
    }

    return (
        <div className='add-form'>
            <h3>What do you need for your trip?</h3>
            <form>
                <select
                    name='num'
                    value={item.num}
                    onChange={handleOnChange}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <input
                    name='name'
                    type='text'
                    placeholder='item...'
                    value={item.name}
                    onChange={handleOnChange}
                />
                <button onClick={handleAddItem}>ADD</button>
            </form>

        </div>
    )
}

export default AddForm;