import React from "react";

import "./App.css";
import TodoList from "./components/TodoList";

// TODO:
// 1. extract out component
// 2. styling
// 3. clear input when after adding
// 4. implement delete item

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
