import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        alert('Ojo con eso manito');
    }
    return(
        <button
        className='CreateTodoButton'
        onClick = {onClickButton}
        >+</button>
    );
}

export {CreateTodoButton};