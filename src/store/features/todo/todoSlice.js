import { createSlice } from "@reduxjs/toolkit";
import * as todoAPI from "./todoAPI";

export const todoSlice = createSlice({
  name: "todo",
  reducerPath: "todo",
  initialState: {
    todoData: [],
  },
  reducers: {
    todosLoaded: (state, { payload }) => {
      state.todoData = payload;
    },
  },
});

// action creator
export const { todosLoaded } = todoSlice.actions;
// reducer
export default todoSlice.reducer;

// Thunk Action Creator
export const fetchTodoById = (todoId) => async (dispatch) => {
  const result = await todoAPI.todoAPIUsingID(todoId);
  dispatch(todosLoaded(result));
};
