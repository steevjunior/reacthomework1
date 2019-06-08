import React from "react";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          description: "buy things",
          done: true
        }
      ]
    };
  }

  onAddItem = description => {
    let items = this.state.items;
    items.push({
      description,
      done: false
    });
    this.setState({ items });
  };

  changeDone = index => {
    let newItems = this.state.items;
    let item = this.state.items[index];
    item.done = !item.done;
    newItems[index] = item;
    this.setState({ items: newItems });
  };

  deleteItem = index => {
    let newItems = this.state.items;
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  };

  updateItem = index => {
    let newItems = this.state.items;
    let item = this.state.items[index];
    let newDescription = prompt("update item description", item.description);
    item.description = newDescription;
    item.done = false;
    newItems[index] = item;
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div>
        <AddItem onAddItem={this.onAddItem} />
        <table className="todoitem">
          <tbody>
            {this.state.items.map((value, index) => {
              return (
                <TodoItem
                  description={value.description}
                  done={value.done}
                  key={index}
                  ind={index}
                  changeDone={this.changeDone}
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
