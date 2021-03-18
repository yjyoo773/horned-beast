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
  };
  cardIsClicked = () => {
    this.props.cardIsClicked(this.props.index);
  };

  render() {
    console.log("Num of click ", this.state.numberOfFavs);
    return (
      <div >
      <Card
      style={{width: "14rem", margin:"auto"}}
      className="text-center mx-auto bg-light text-dark"
      border="info"
      onClick = {this.cardIsClicked}
      >
        <Card.Header>
          <h2>{this.props.title}</h2>
        </Card.Header>
        <Card.Body>
          <Card.Img
            variant="bottom"
            src={this.props.image_url}
            alt={this.props.keyword}
            title={this.props.title}
            onClick={this.clickFav}
            />
          <h3>❤️ {this.state.numberOfFavs}</h3>
          <p>{this.props.description}</p>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default HornedBeast;
