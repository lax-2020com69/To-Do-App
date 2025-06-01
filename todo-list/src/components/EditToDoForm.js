import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedValue = value.trim();
        if (!trimmedValue) {
            return; // Prevent empty submissions
        }

        editTodo(trimmedValue, task.id);
        setValue(""); // Clear the input field after submission
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input' 
                value={value} 
                placeholder='Update Task' 
                onChange={(e) => setValue(e.target.value)} 
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    );
};
