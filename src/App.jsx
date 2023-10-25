import { useState } from "react";
import TaskCount from "./components/TaskCount";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [Listed, setListed]= useState([]);

const todoDeletedHandler = (toDelete) => {
  if(window.confirm("Are you sure?")) {
    setListed(Listed.filter((item)=> item.id !== toDelete))
  }
}

const toBeDoneWork = (addToList) => {
  setListed([addToList,...Listed])
}


return (
  <>
  <TodoProvider>
    <TaskCount toBeCount={Listed}/>
    <TodoForm unDoneWork={toBeDoneWork}/>
    <TodoList deletedHandler={todoDeletedHandler} toBeShown={Listed}/>
  </TodoProvider>
  </>
);
}

export default App;