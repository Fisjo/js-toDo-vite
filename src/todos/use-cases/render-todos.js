import { Todo } from "../models/todo.model";
import { createTodoHMTL } from "./create-todo-html";


let element; 


/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    if (!element) { 
        element = document.querySelector(elementId);
    }
 
    if (!element) { throw new Error(`Element ${elementId} not found`); }

    element.innerHMTL = ''; 

    todos.forEach(todo => {
        element.append(createTodoHMTL(todo)); 
    });

}