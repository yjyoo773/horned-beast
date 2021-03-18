import "./App.css";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import Container from "react-bootstrap/Container";

import data from "./data.json";

import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./selectedbeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showModal: false,
      clickedCard: {},
      numHorns: "All",
    };
  }
  cardIsClicked = (index) => {
    this.setState({ clickedCard: this.state.data[index], showModal: true });
  };
  formForHorn = (numHorns) => {
    this.setState({ numHorns });
  };
  handleClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    console.log("from App horn number is ", this.state.numHorns);
    return (
      <div className="App">
        <Container className="align-middle">
          <Header
            // numHorns={this.state.numHorns}
            formForHorn={this.formForHorn}
          />
          <Main
            data={this.state.data}
            numHorns={this.state.numHorns}
            cardIsClicked={this.cardIsClicked}
          />
          <SelectedBeast
            show={this.state.showModal}
            handleClose={this.handleClose}
            clickedCard={this.state.clickedCard}
          />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
