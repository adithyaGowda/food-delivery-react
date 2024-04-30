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
      <div className="ml-10 m-8 w-[700px] bg-gray-100 flex justify-between">
        <div>
          <img className="w-[100px] " src={avatar_url} />
          <h3>name: {name}</h3>
          <h4>place: {location}</h4>
          <h4>contact: @USER_CONTACT</h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
