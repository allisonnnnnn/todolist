import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

import "../styles/TodoList.css";

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
    const { list } = this.state;

    return (
      <div>
        {/* <div className="Todolist"> */}
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <TextField
              id="filled-basic"
              onChange={this.changeInput}
              className="inputForm"
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addListItem}
            >
              Add
            </Button>
          </Grid>

          {/* </div> */}
          {/* use ul li to create list item */}

          <List className="ListItem">
            {list.map(item => (
              <>
                <ListItem className="ListItem" key={item}>
                  <span className="item"> {item}</span>
                  <Button className="DeleteButton">Delete</Button>
                </ListItem>
              </>
            ))}
          </List>
        </Grid>
      </div>
    );
  }
}

export default TodoList;
