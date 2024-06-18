import { SignUpPageOne } from "./SignUpPageOne";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SignUpPageTwo } from "./SignUpPageTwo";
import { SignUpPageThree } from "./SignUpPageThree";
export const SignUp = () => {
  const actualPage = useSelector((state: RootState) => state.counter?.value);

  const pages = {
    1: <SignUpPageOne />,
    2: <SignUpPageTwo />,
    3: <SignUpPageThree />,
  };

  return <>{pages[actualPage]}</>;
};
