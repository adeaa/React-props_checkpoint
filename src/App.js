import React, { Component } from "react";
import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    fullName: "Adam moalla",
    bio: "hey this is the react props checkpoint project",
    profession: "Assassin",
  };
  render() {
    return (
      <ProfileComponent
        fullName={this.state.fullName}
        bio={this.state.bio}
        profession={this.state.profession}
      >
        <img
          src="./avatar.jpg"
          alt="profile picture"
          style={{ width: "70%", borderRadius: "70%" }}
        />
      </ProfileComponent>
    );
  }
}

export default App;
