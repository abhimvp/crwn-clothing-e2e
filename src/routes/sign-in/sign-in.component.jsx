import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    // remember whenever you make a call to database this is going to be asyncronous.
    const { user } = await signInWithGooglePopUp();
    console.log(user); // here we can see the access_token we get from google & firebase
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  // const logGoogleRedirectUser = async () => {
  //   // remember whenever you make a call to database this is going to be asyncronous.
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user }); // here we can see the access_token we get from google & firebase
  //   // const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop up</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
