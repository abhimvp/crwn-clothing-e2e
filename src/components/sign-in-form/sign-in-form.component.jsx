import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import {
  // createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
// import { UserContext } from "../../contexts/user.context"; /// this userContext obj is going to give us back whatever value is passed in for the value (userCOntext.provider) , value is the currentUser of useState & as well as setCurrentUser function
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    // remember whenever you make a call to database this is going to be asyncronous.
    await signInWithGooglePopUp();
    // setCurrentUser(user);
    // console.log(user); // here we can see the access_token we get from google & firebase
    // await createUserDocumentFromAuth(user); // we can move this into userContext whenever auth changes when user sign'in
  };

  const handleChange = (event) => {
    // console.log(event);
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // console.log("userContext-currentUserValue before Nav", currentUser);
      // setCurrentUser(user); // let's access this user inside Navigation component
      // await createUserDocumentFromAuth(user);
      // console.log("user exists");
      // console.log({ user });
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
