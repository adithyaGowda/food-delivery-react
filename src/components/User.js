import { useState } from "react";

const User = ({ name, place }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h3>name: {name}</h3>
      <h4>place: {place}</h4>
      <h4>contact: @USER_CONTACT</h4>
    </div>
  );
};

export default User;
