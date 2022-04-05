import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  // State
  const [todos, setTodos] = useState([
    "Learn React",
    "Tell all my friends to learn React",
    "Get them to tell five of their friends to learn React",
    "Start a successful MLM or pyramid scheme around React",
  ]);


  return (
    <div>
      <h1>My Todo List 📝</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
}

export default App;
