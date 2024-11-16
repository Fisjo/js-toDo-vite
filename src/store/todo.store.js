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

export default {
    initStore,
}