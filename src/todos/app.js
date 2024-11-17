import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';


const ElementIDs = {
    ClearCompleted: '.clear-completed',
    TodoList:       '.todo-list', 
    NewTodoInput:   '#new-todo-input',
    TodoFilters:    '.filtro',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter()); 
        renderTodos(ElementIDs.TodoList, todos); 
               
    }



    //Cuando la funcion App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app); 
        displayTodos();
    })(); 



    //referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted); 
    const filtersLIs = document.querySelectorAll(ElementIDs.filtersUL); 

    //listeners
    newDescriptionInput.addEventListener('keyup', (event) => {

        if (event.keyCode !== 13) { return; }
        if (event.target.value.trim().length === 0) { return; }    
        
        todoStore.addTodo(event.target.value); 
        displayTodos();
        event.target.value = ''; 

    });

    todoListUL.addEventListener('click', (event) => {

        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();
        
    });

    todoListUL.addEventListener('click', (event) => {

        const isDestroyedElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');

        if (!isDestroyedElement) { return; }

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos(); 
        
    });

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted(); 
        displayTodos();       
    });

    filtersLIs.forEach( element => {

        element.addEventListener('click', (element) => {
            filtersLIs.forEach( el => el.classList.remove('selected') );
            element.target.classList.add('selected');

            switch( element.target.text ){
                case 'Todos':
                    todoStore.setFilter( Filters.All )
                break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending )
                break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed )
                break;
            }

            displayTodos();

        });


    });
}