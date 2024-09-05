import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    // remember whenever you make a call to database this is going to be asyncronous.
    const { user } = await signInWithGooglePopUp();
    console.log(user); // here we can see the access_token we get from google & firebase
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    // console.log(event);
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // await createUserDocumentFromAuth(user);
      console.log("user exists");
      console.log({ user });
      resetFormFields();
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        alert("Wrong Password Entered, please try again to Sign in");
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
