import React from "react";
// import Navbar from "react-bootstrap/Navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: true,
    };
  }

  clickToChangeTitle = () => {
    this.setState({ title: !this.state.title });
  };

  render() {
    console.log(this.state.title);
    return (
      <h1 onClick={this.clickToChangeTitle}>
        {this.state.title ? "Horned Beasts" : "Beasts with Horns"}
      </h1>
    );
  }
}

export default Header;
