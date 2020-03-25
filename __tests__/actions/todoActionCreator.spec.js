export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';

export const addTodo = () => {
  return {
    type: ADD_TODO
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO
  };
};

export const toggleTodoCompleted = () => {
  return {
    type: TOGGLE_TODO_COMPLETED
  };
};