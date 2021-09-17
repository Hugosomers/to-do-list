import { ADD_TASK, DELETE_TASK } from "../action";
const INITIAL_STATE = {
  tasks: [],
}

const todoListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item, index) => index !== action.payload),
      }
    default:
      return state;
  }
}

export default todoListReducer;
