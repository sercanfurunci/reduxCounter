import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
  setNumber,
  setEditedOpen,
} from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const number = useSelector((state) => state.counter.number);
  const editedOpen = useSelector((state) => state.counter.editedOpen);
  const handleOnChangeNumber = (e) => {
    console.log("handleonchnage" + e.target.value);
    const numberIncrement = Number(e.target.value);
    dispatch(setNumber(numberIncrement));
    console.log("number" + number);
  };

  const incrementHandle = () => {
    dispatch(incrementByAmount(number));
    dispatch(setEditedOpen(false));
  };

  const decrementHandle = () => {
    dispatch(decrementByAmount(number));
    dispatch(setEditedOpen(false));
  };
  return (
    <div className="container">
      <div>
        <h1>Counter</h1>
        <h2 style={{ textAlign: "center" }}>{count}</h2>
      </div>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(reset())}>Reset</button>

        {editedOpen ? (
          <div>
            <button onClick={incrementHandle}>Arttir</button>

            <button onClick={decrementHandle}>Azalt</button>
            <input
              className="input-number"
              type="number"
              value={number}
              onChange={handleOnChangeNumber}
            />
          </div>
        ) : (
          <button onClick={() => dispatch(setEditedOpen(true))}>
            BY amount OPEN
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
