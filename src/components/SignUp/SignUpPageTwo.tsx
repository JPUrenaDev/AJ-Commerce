import React from "react";
import { ProgressPage } from "./ui/ProgressPage";

import { ButtonContinueSignUp } from "./ui/ButtonContinueSignUp";
export const SignUpPageTwo = () => {
  return (
    <SignUpForm height={1100}>
      <ProgressPage />
      <input placeholder="test"></input>
      <ButtonContinueSignUp />
    </SignUpForm>
  );
};
