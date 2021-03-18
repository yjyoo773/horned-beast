import React from "react";
import HornedBeast from "./hornedbeast";
import CardDeck from "react-bootstrap/CardDeck";
// import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    let data = this.props.data;
    let numHorns = this.props.numHorns;
    const filterHorns = data.filter((x) => {
      if (numHorns === "All") return x;
      return x.horns === Number(numHorns);
    });
    console.log("from main ", numHorns);
    return (
      <div>
        {/* <CardDeck style={{ width: "100%", display: "flex" }}>
          {filterHorns.map((element, index) => (
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
        </CardDeck> */}
        <CardDeck>
          {filterHorns.map((element, index) => (
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
        </CardDeck>
      </div>
    );
  }
}

export default Main;
