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



const getTodo = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]; 
        
        case Filters.Completed: 
            return state.filter(state.todos == true); 
            
        case Filters.Pending: 
            return state.filter(state.todos === false);

        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) { throw new Error("Description is required"); }
    state.todos.push( new Todo(description))    
}


/**
 * Cambia el estado de la tarea al opuesto (hecho / no hecho)
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done === !todo.done; 
        }
        return todo; 
    })
}


/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId); 
}


const deleteCompleted = (newFilter = Filters.All) => {
    state.todos = state.todos.filter(todo => todo.done); 

}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter; 
}


const getCurrentFilter = () => {
    return state.filter; 
}


//estas funciones van a servir para manipular el store indirectamente
export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodo,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}