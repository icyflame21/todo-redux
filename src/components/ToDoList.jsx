import React from 'react';
import {
    useSelector
} from 'react-redux';

const ToDoList = () => {
    const {todoItem} = useSelector(store => store);

    const handleDelete = (e) => {
        // your logic goes
        console.log("delete called", parseInt(e.target.name));

    };
    return (
    <div>
        {
            todoItem.map((task, index) => (
                <div key={index} style={{display: 'flex', justifyContent: 'center'}}>
                    <h5>{task}</h5>
                    <button onClick={handleDelete} name={index}>delete</button>
                </div>)
            )
        }
    </div>)
}

export default ToDoList;