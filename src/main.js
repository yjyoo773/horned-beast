import React from "react";
import HornedBeast from "./hornedbeast";
import CardGroup from "react-bootstrap/CardGroup";

class Main extends React.Component {
  cardIsClicked = () => {
    this.props.clickCard();
  }
  render() {
    const data = this.props.data;
    return (
      <div>
        <CardGroup>
          {data.map((element, index) => (
            <div key={index}>
              <HornedBeast
                index={index}
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                keyword={element.keyword}
                cardIsClicked={this.props.cardIsClicked}
              />
            </div>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default Main;
