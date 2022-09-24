const ADD_TODO = 'ADD_TODO'
export const addTodo = (message) => ({
    id: Math.random(),
    type: ADD_TODO,
    message,
});

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => ({
    id,
    type: DELETE_TODO,
});