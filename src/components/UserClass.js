import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy place",
      },
    };
    console.log("child constructor called");
  }

  async componentDidMount() {
    console.log("child component did mount called");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(
      "inside component did mount. after fecthing api " + JSON.stringify(json)
    );

    this.setState({
      userInfo: json,
    });
    console.log("inside component did mount. after setState is called");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount is called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("child render called");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>name: {name}</h3>
        <h4>place: {location}</h4>
        <h4>contact: @USER_CONTACT</h4>
      </div>
    );
  }
}

export default UserClass;
