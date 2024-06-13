import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

export const changePageSignUpSlice = createSlice({
  name: "advanceNextPage",
  initialState,
  reducers: {
    advanceNextPage: (state) => {
      if (state.value == 3) {
        state.value = 3;
        return;
      }
      state.value += 1;
    },
    dontAdvanceNextPage: (state) => {
      if (state.value == 1) {
        state.value = 1;
        return;
      }
      state.value + -1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { advanceNextPage, dontAdvanceNextPage } =
  changePageSignUpSlice.actions;

export default changePageSignUpSlice.reducer;
