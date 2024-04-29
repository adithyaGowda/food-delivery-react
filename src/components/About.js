import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent component did mount called");
  }

  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>About US</h1>
        <p>This is a demo project just to demonstrate REACT JS concepts</p>

        <UserClass />
      </div>
    );
  }
}

export default About;
