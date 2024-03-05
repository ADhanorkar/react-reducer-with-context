import { useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { reducer } from "./state/reducer";
import { initialState } from "./state/State";
import { CountContext } from "./state/countContext";

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>
        [ Simple use of <code>useReducer</code> with <code>useContext</code> ]
      </h3>
      <hr />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <Counter />
      </CountContext.Provider>
    </div>
  );
}

export default App;
