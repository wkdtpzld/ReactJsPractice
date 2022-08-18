import "./styles.css";
import React, { useState } from "react";

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem((current) => current + 1);
  const decrementItem = () => setItem((current) => current - 1);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}> Increment </button>
      <button onClick={decrementItem}> decrement </button>
    </div>
  );
}

export default class AppUgly extends React.Component {
  state = {
    item: 1
  }

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item} </h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}> Increment </button>
        <button onClick={this.decrementItem}> decrement </button>
      </div>
    )
  }

  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    });
  };

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    });
  };
}