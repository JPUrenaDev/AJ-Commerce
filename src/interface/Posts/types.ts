export interface Render_Posts {
  image: string;
  details: string;
  price: number;
  moreDetails: string;
  title: string;
  business_type: string;
  isVerify: boolean;
}

export interface Login {
  email: string;
  password: string;
}

export interface PasswordCriteria {
  minimunCharacters: boolean;
  atLeastOneNumber: boolean;
  atLeastOneCapLock: boolean;
  atLeastOneLowerCase: boolean;
  atLeastOneSpecialCharacter: boolean;
}

export interface IFormInput {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface FormProps {
  height: number;
}
