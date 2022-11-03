import React from "react";
import { useTodos } from "../useTodos";
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal';
import { TodoForm } from "../../ui/TodoForm";
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoTitle } from '../../ui/TodoTitle';
import { ChangeAlert } from '../../ui/ChangeAlert';


function HomePage() {
  const {
    states,
    stateupdaters,
  } = useTodos();
  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    } = states;

const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    syncronizeTodos,
    } = stateupdaters;
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
                        <p className="search-description">No hay resultado para {searchText} </p>
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
            <ChangeAlert
                syncronize = {syncronizeTodos}

            />
        </React.Fragment>
        )
}

export { HomePage };