import React from "react";
import HornedBeast from "./hornedbeast";
import CardGroup from "react-bootstrap/CardGroup";

class Main extends React.Component {
  render() {
    return (
      <div>
        <CardGroup>
          {this.props.data.map((element, index) => (
            <div key={index}>
              <HornedBeast
                index={index}
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                keyword={element.keyword}
                horns={element.horns}
                cardIsClicked={() => this.props.cardIsClicked(index)}
              />
            </div>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default Main;
