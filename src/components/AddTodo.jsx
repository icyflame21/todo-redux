import React, {useState} from 'react';
import {
    store
} from '../redux/store';
import {
    ADD_NEW_ITEM
} from '../redux/actions';

const AddTodo = () => {
    const [newItem, setnewItem] = useState('');

    const handleChange = (event) => {
        setnewItem(event.target.value);
    };

    const handleSubmit = () => {
        store.dispatch({
            type: ADD_NEW_ITEM,
            payload: newItem
        });
    };
    return (
    <div>
        <input placeholder="Enter your new todo here..." onChange={handleChange}/>
        <button onClick={handleSubmit}>
            Add new item
        </button>
    </div>)
}

export default AddTodo;