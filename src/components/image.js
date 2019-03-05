import React from "react";

class Image extends React.Component {
  render() {
    const { urls, description } = this.props.image;
    return (
      <div className="item">
        <div className="image">
          <img src={urls.small} alt={description} />
        </div>
        <div className="middle aligned content">
          <a className="header">{description}</a>
        </div>
      </div>
    );
  }
}

export default Image;
