import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: true,
  //     // horns: "",
  //   };
  // }

  // clickToChangeTitle = () => {
  //   this.setState({ title: !this.state.title });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.formForHorn(this.state.numHorns);
  };

  updateHorn = (e) => {
    // console.log("horn number is ", e.target.value);
    this.setState({ numHorns: e.target.value });
  };

  render() {
    return (
      <div>
        <Navbar className="justify-content-between" bg="light" variant="light">
          <Navbar.Brand href="#home">
            <h1>Gallery of Horns</h1>
          </Navbar.Brand>
          <Form inline onSubmit={this.handleSubmit}>
            <Form.Label variant="dark">
              <h3>Horns </h3>
            </Form.Label>
            <Form.Control
              onChange={this.updateHorn}
              as="select"
              defaultValue="Choose..."
              className="mr-sm-2"
            >
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;
