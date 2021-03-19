import React from "react";
import HornedBeast from "./hornedbeast";
import CardDeck from "react-bootstrap/CardDeck";

class Main extends React.Component {

  // Try to make work with componentDidMount

  // constructor(props){
  //   super(props);
  //   this.state={
  //     filterHorns : []
  //   }
  // }

  // componentDidMount = () =>{
  //   let data = this.props.data;
  //   let numHorns = this.props.numHorns;
  //   const filterHorns = data.filter((x) => {
  //     if (numHorns === "All") return x;
  //     return x.horns === Number(numHorns);
  //   });
  //   this.setState({filterHorns});
  // }
  render() {
    let data = this.props.data;
    let numHorns = this.props.numHorns;
    const filterHorns = data.filter((x) => {
      if (numHorns === "All") return x;
      return x.horns === Number(numHorns);
    });

    console.log("from main ", numHorns);
    return (
      <CardDeck >
        {filterHorns.map((element, index) => (
          <div key={element.title}>
            <HornedBeast
              title={element.title}
              image_url={element.image_url}
              description={element.description}
              keyword={element.keyword}
              horns={element.horns}
              // cardIsClicked={() => this.props.cardIsClicked(index)}
              cardIsClicked={() => this.props.cardIsClicked(element.title)}

            />
          </div>
        ))}
      </CardDeck>
    );
  }
}

export default Main;
