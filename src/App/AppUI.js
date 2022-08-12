import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoTitle } from '../TodoTitle';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
    <React.Fragment>
    <TodoTitle/>
    <TodoCounter
        total={totalTodos}
        completed={completedTodos}
    />

    <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
    />
    <TodoList>
        {error && <p>Hubo un error....</p>}
        {loading && <p>Estamos cargando</p>}
        {(!loading &&!searchedTodos.lenght) && <p>Crea tu primer tarea</p>}
        {searchedTodos.map(todo => (
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
        />
        ))}
    </TodoList>
    <CreateTodoButton />
    </React.Fragment>
    )
}

export {AppUI};