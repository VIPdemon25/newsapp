import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishTime } =
      this.props;
    return (
      <div>
        <div className="card my-3">
          <img
            src={
              !imageUrl
                ? "https:akm-img-a-in.tosshub.com/indiatoday/images/story/202305/cover_photo-tech-sixteen_nine.jpg?VersionId=rEMcwfpbADQxeMlojX3fGoZheQAytbyN"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                Source: {!author ? "unkown" : author}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
