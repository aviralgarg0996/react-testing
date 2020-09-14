import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button"
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (this.state.counter > 0)
              this.setState({ counter: this.state.counter - 1 });
          }}
          data-test="decrement-button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
