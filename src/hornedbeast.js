import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFavs: 0,
    };
  }

  clickFav = () => {
    this.setState({ numberOfFavs: this.state.numberOfFavs + 1 });
    // this.props.showModal(this.props.index)
  };
  modal = () => {
    this.props.cardIsClicked(this.props.index);
  };

  render() {
    console.log("Num of click ", this.state.numberOfFavs);
    return (
      <Card
        style={{ width: "12rem" }}
        className="text-center mx-auto bg-dark text-white"
        border="info"
        onClick = {this.modal}
      >
        <Card.Header onClick={this.clickFav}>
          <h2>{this.props.title}</h2>
        </Card.Header>
        <Card.Body onClick={this.clickFav}>
          <Card.Img
            variant="bottom"
            src={this.props.image_url}
            alt={this.props.keyword}
            title={this.props.title}
            
          />
          <h3>❤️ {this.state.numberOfFavs}</h3>
          <p>{this.props.description}</p>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
