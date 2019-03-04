import React from "react";

class Image extends React.Component {
  render() {
    const { urls, description } = this.props.image;
    return (
      <div>
        <img src={urls.small} alt={description} />
      </div>
    );
  }
}

export default Image;
