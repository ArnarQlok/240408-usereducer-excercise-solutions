// Skapa en enkel formulärhanteringsapplikation där användaren kan fylla i sitt namn i ett input-fält och sedan skicka in formuläret. Namnet ska sedan visas på sidan. Använd useReducer för att hantera tillståndet för formuläret.

import { useReducer } from "react";

const initialState = {
  name: "",
  submittedName: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "SUBMIT_FORM":
      return { ...state, submittedName: state.name, name: "" };
    default:
      return state;
  }
};

function FormApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div className="container">
      <h1>Form App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={state.name} onChange={handleChange} />
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p className="submitted">Submitted Name: {state.submittedName}</p>
    </div>
  );
}

export default FormApp;
