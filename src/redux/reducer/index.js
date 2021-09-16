import { combineReducers } from "redux";
import todoListReducer from "./todoList";


const rootReducer = combineReducers({
  todoListReducer,
});

export default rootReducer;