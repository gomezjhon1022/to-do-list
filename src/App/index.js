import React from "react";
import { useTodos } from "./useTodos";
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoTitle } from '../TodoTitle';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    } = useTodos();
    return (
        <React.Fragment>
                <TodoHeader loading={loading}>
                    <TodoTitle/>
                    <TodoCounter
                        totalTodos= {totalTodos}
                        completedTodos= {completedTodos}
                    />
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </TodoHeader>
                <TodoList
                    error={error}
                    loading={loading}
                    searchedTodos={searchedTodos}
                    onError={() => <TodosError /> }
                    onLoading={() => <TodosLoading /> }
                    onEmptyTodos={() => <EmptyTodos /> }
                    totalTodos={totalTodos}
                    searchText={searchValue}
                    onEmptySearchResults={(searchText) => (
                        <p>No hay resultado para {searchText} </p>
                        )}

                // usando render prop
                //     render={todo => (
                //         <TodoItem
                //         key={todo.text}
                //         text={todo.text}
                //         completed={todo.completed}
                //         onComplete={()=> completeTodo(todo.text)}
                //         onDelete={()=> deleteTodo(todo.text)}
                //     />
                //    )}
                //     />


                // usando render funtion
                >
                    {todo => (
                        <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={()=> completeTodo(todo.text)}
                        onDelete={()=> deleteTodo(todo.text)}
                        />
                    )}
                </TodoList>

                {!!openModal && (
                <Modal>
                    <TodoForm
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                />
                </Modal>
                )}
            <CreateTodoButton
                setOpenModal = {setOpenModal}
            />
            <ChangeAlertWithStorageListener />
        </React.Fragment>
        )
}

export default App;
