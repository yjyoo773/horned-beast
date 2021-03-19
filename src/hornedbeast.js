import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';

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
    // this.props.cardIsClicked(this.props.title);
    this.props.cardIsClicked(this.props.index);
  };

  render() {
    console.log("Num of click ", this.state.numberOfFavs);
    var cardStyle = {width:"15.7rem",margin:"20px", height: "22rem" }; // width 14rem
    var cardImgStyle = { height: "12rem" };
    return (
      <div>
        <Col  >
        {/* <Col className="container-fluid" xs={3}  > */}

          <Card
            style={cardStyle}
            className="text-center mx-auto bg-light text-dark"
            border="info"
            onClick={this.cardIsClicked}
          >
            <Card.Body>
              <Card.Img
                variant="bottom"
                src={this.props.image_url}
                alt={this.props.keyword}
                title={this.props.title}
                onClick={this.clickFav}
                style={cardImgStyle}
              />
              <h3>❤️ {this.state.numberOfFavs}</h3>
              <h4 style={{ margin: "auto" }}>{this.props.title}</h4>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default HornedBeast;
