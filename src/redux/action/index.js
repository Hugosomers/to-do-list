export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const EDIT_MODE = "EDIT_MODE";
export const EDIT_TASK = "EDIT_TASK";
export const COMPLETED_MODE = "COMPLETED_MODE";

export const addTaskAction = (payload) => ({
  type: ADD_TASK,
  payload
});

export const deleteTaskAction = (payload) => ({
  type: DELETE_TASK,
  payload
});

export const completeTaskAction = (payload, index) => ({
  type: COMPLETE_TASK,
  payload,
  index
});

export const editModeActiveAction = (payload) => ({
  type: EDIT_MODE,
  payload
});

export const editTaskAction = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const completedModeActiveAction = (payload) => ({
  type: COMPLETED_MODE,
  payload,
});
