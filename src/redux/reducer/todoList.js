import { ADD_TASK } from "../action";
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
    default:
      return state;
  }
}

export default todoListReducer;
