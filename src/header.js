import React from "react";
// import Navbar from "react-bootstrap/Navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Horned Beasts",
    };
  }

  clickToChangeTitle = () => {
    this.setState({ title: "Beast Horns" });
  };

  render() {
    console.log(this.state.title);
    return <h1 onClick={this.clickToChangeTitle}>{this.state.title}</h1>;
  }
}

export default Header;
