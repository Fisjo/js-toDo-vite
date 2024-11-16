import { Todo } from "../todos/models/todo.model";


const Filters = {
    All: 'all', 
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Tarea de prueba1'),
        new Todo('Tarea de prueba 2'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('Init store <3');
}

const loadStore = () => {
    throw new Error("Not implemented");
}


/**
 * 
 * @param {String} descripcion 
 */
const addTodo = (descripcion) => {
    throw new Error("Not implemented");
}


/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error("Not implemented");
}


/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    throw new Error("Not implemented");
}


const deleteAll = (newFilter = Filters.All) => {
    throw new Error("Not implemented");
}


const setFilter = () => {
    throw new Error("Not implemented");
}


const getCurrentFilter = () => {
    throw new Error("Not implemented");
}


//estas funciones van a servir para manipular el store indirectamente
export default {
    addTodo,
    deleteAll,
    deleteTodo,
    getCurrentFilter,
    addTodo,
    deleteAll,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
    loadStore,
    setFilter,
    toggleTodo,
}