import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  number: 0,
  editedOpen: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = initialState.value;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setEditedOpen: (state, action) => {
      state.editedOpen = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
  setNumber,
  setEditedOpen,
} = counterSlice.actions;

export default counterSlice.reducer;
