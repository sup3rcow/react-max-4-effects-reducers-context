import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {
    throw new Error("not implemented");
    return;
  },
});

export default AuthContext;
