import React from "react";
import HornedBeast from "./hornedbeast";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>This is Main</h2>
        <HornedBeast
          title={"Goat"}
          source={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/220px-Hausziege_04.jpg"
          }
          alt={"goat-img"}
          description={
            "Any of numerous agile, hollow-horned ruminants of the genus Capra, of the family Bovidae, closely related to the sheep, found native in rocky and mountainous regions of the Old World, and widely distributed in domesticated varieties."
          }
        />
      </div>
    );
  }
}

export default Main;
