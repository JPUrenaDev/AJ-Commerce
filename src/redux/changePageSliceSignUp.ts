import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFormInput } from "../interface/Posts/types";
export interface CounterState {
  value: number;
  accountInformation: IFormInput;
}

const initialState: CounterState = {
  value: 1,
  accountInformation: {
    userName: "",
    password: "",
    email: "",
    repeatPassword: "",
  },
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
      state.value -= 1;
    },

    getAndSaveAccountInformation: (
      state,
      action: PayloadAction<IFormInput>
    ) => {
      state.accountInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  advanceNextPage,
  dontAdvanceNextPage,
  getAndSaveAccountInformation,
} = changePageSignUpSlice.actions;

export default changePageSignUpSlice.reducer;
