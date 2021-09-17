export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTaskAction = (payload) => ({
  type: ADD_TASK,
  payload
});

export const deleteTaskAction = (payload) => ({
  type: DELETE_TASK,
  payload
});
