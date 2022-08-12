import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoTitle } from '../TodoTitle';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
        } = React.useContext(TodoContext);
    return (
    <React.Fragment>
    <TodoTitle/>
    <TodoCounter />
    <TodoSearch />
    <TodoContext.Consumer>
        {({
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo
        }) => (
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
        )}
    </TodoContext.Consumer>
    <CreateTodoButton />
    </React.Fragment>
    )
}

export {AppUI};