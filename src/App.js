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
      renderToggle: true,
    };
  }

  cardIsClicked = (title) => {
    const beastTitle = data.find(beast => beast.title === title)
    this.setState({ clickedCard: beastTitle, showModal: true });
    // console.log("From cardIsClicked ", this.state.clickedCard)
  };

  formForHorn = (numHorns,renderToggle) => {
    this.setState({ numHorns });
    this.setState({renderToggle})
  };
  handleClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    var footerStyle = {
      padding : "2rem"
    }
    // console.log("from App renderToggle is  ", this.state.renderToggle);
    return (
      <div className="App">
        <Container className="align-middle">
          <Header
            formForHorn={this.formForHorn}
          />
          <Main
            data={this.state.data}
            numHorns={this.state.numHorns}
            cardIsClicked={this.cardIsClicked}
            key = {this.state.renderToggle}
          />
          <SelectedBeast
            show={this.state.showModal}
            handleClose={this.handleClose}
            clickedCard={this.state.clickedCard}
          />
          <Footer style={footerStyle}/>
        </Container>
      </div>
    );
  }
}

export default App;
