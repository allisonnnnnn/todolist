import React from "react";

import "./App.css";
import TodoList from "./components/TodoList";

// TODO:
// 2. styling with martial-ui
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
