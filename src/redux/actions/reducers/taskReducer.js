import { ADD_TASK } from "../actions/type";

const initialState = {
  taskList: [
    { id: 1, description: "task1", isDone: true },
    { id: 2, description: "task2", isDone: false },
  ],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, action.payload] };
    default:
      return state;
  }
};

export default taskReducer;