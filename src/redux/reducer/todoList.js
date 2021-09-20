import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_MODE, EDIT_TASK } from "../action";
const INITIAL_STATE = {
  tasks: [],
  completedTasks: [],
  editMode: false,
  taskIdEdit: null,
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
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item, index) => index !== action.index),
        completedTasks: [...state.completedTasks, action.payload]
      }
    case EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode,
        taskIdEdit: action.payload,
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item, index) => index === state.taskIdEdit ? action.payload : item),
      }
    default:
      return state;
  }
}

export default todoListReducer;
