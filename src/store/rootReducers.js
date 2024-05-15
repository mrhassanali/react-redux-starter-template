import { combineReducers } from "redux";
import loadingReducer, { loadingSlice } from "./features/loading/loadingSlice";
import todoReducer, { todoSlice } from "./features/todo/todoSlice";

const rootReducers = combineReducers({
  [loadingSlice.reducerPath]: loadingReducer,
  [todoSlice.reducerPath]: todoReducer,
});

export default rootReducers;
