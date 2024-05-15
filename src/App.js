import "./css/App.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "./store/features/loading/loadingSlice";
import selectLoading from "./store/features/loading/loadingSelector";
import { fetchTodoById } from "./store/features/todo/todoSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading); // Renamed the variable here

  const handleToggleLoading = () => {
    dispatch(toggleLoading());
  };

  useEffect(() => {
    dispatch(fetchTodoById(1));
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Loading is {isLoading ? "true" : "false"}</h2>
        <button onClick={handleToggleLoading}> Toggle Loading</button>
      </header>
    </div>
  );
}

export default App;
