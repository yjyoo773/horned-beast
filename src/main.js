import React from "react";
import HornedBeast from "./hornedbeast";
import data from "./data.json";

class Main extends React.Component {
  render() {
    return (
      <div>
        {/* <ul> */}
          {data.map((element,index) => (
            <div key={index}>
              <HornedBeast
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                keyword={element.keyword}
              />
            </div>
          ))}
        {/* </ul> */}
      </div>
    );
  }
}

export default Main;
