import React from 'react';
import './TodoTitle.css';

function TodoTitle() {
    return (
        <h1 className='TodoTitle'>
        <span src='list-icon.svg' className='list-icon'></span>
        Bienvenido a tu lista de tareas</h1>
    );
}
export { TodoTitle };