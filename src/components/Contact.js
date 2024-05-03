import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { loggedUser } = useContext(UserContext);
  return (
    <div>
      <h1>Contact US</h1>
      <h2>{loggedUser}</h2>
    </div>
  );
};

export default Contact;
