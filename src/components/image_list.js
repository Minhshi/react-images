import React from "react";
import Image from "./image";

class ImageList extends React.Component {
  render() {
    return (
      <div className="ui divided items">
        {this.props.images.map(image => {
          return <Image image={image} key={image.id} />;
        })}
      </div>
    );
  }
}

export default ImageList;
