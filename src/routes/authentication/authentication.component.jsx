import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = () => {
  // const logGoogleRedirectUser = async () => {
  //   // remember whenever you make a call to database this is going to be asyncronous.
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user }); // here we can see the access_token we get from google & firebase
  //   // const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="auth-forms-cointainers">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
