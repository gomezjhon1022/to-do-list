import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
    return (
        <div className='empty-container'>
            <h1 className='empty-title'>! Vamos !</h1>
            <p className='empty-subtitle'>Crea tu primera tarea</p>
        </div>
    )
}

export { EmptyTodos};