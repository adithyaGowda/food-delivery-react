import { createContext } from "react";

const UserContext = createContext({
  loggedUser: "DEFAULT USER",
});

export default UserContext;
