import { createContext, useState } from "react";

// this user context is the actual value you want to access.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// a provider is the actual component , we receive children
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
// .provider is the component that will wrap around any other components that needs access to the values inside
// This is UserProvider is a provider essentially allowing any of its child components {children} to access the values inside of it's useState
