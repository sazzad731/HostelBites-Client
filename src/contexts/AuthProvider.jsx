import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState({});

  const authInfo = {
    user
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;