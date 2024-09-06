import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  //   signOutUser,
} from "../utils/firebase/firebase.utils";
// this user context is the actual value you want to access.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// a provider is the actual component , we receive children
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //   signOutUser();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // whenever auth state changes this function get's triggered.
      console.log("unsubscribe = ", user);
      if (user) {
        // whenever user sign in , create user user document from auth , instead of from sign-in component
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user); // when user sign's in auth object get's assigned , when signed out , null will get assigned from AuthSTateCHange
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
// .provider is the component that will wrap around any other components that needs access to the values inside
// This is UserProvider is a provider essentially allowing any of its child components {children} to access the values inside of it's useState
