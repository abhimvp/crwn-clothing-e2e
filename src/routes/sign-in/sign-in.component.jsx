import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    // remember whenever you make a call to database this is going to be asyncronous.
    const response = await signInWithGooglePopUp();
    console.log(response); // here we can see the access_token we get from google & firebase
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop up</button>
    </div>
  );
};

export default SignIn;
