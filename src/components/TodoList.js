import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: []
    };
  }

  changeInput = e => {
    this.setState({ input: e.target.value });
  };

  addListItem = () => {
    // list: this.state.list.concat([this.state.input])});
    const newList = [...this.state.list];
    newList.push(this.state.input);
    this.setState({
      list: newList
    });
  };

  render() {
    const { list, input } = this.state;

    return (
      <div className="App">
        <input type="text" onChange={this.changeInput} />
        <button onClick={this.addListItem}>Add</button>
        {/* use ul li to create list item */}
        <ul>
          {list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
