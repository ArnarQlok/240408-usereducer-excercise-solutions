// Du ska skapa en enkel applikation där användaren kan trycka på en knapp för att minska ett nummer med 1. När numret når 0 ska användaren inte kunna minska det mer. Du ska implementera detta med hjälp av useReducer.

import { useReducer } from "react";

const initialState = {
  count: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

function CounterApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>Countdown App</h1>
      <p>Count: {state.count}</p>
      <button className="btn" onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button className="btn" onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      {state.count === 0 && <p className="message">Countdown reached zero</p>}
    </div>
  );
}

export default CounterApp;
