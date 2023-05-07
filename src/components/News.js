import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    // let url =
    //   "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=389985488580449db9ff0ccb47a7d1d4";
    // let data = await fetch(url);
    // let parsed_data = await data.json();
  }
  render() {
    return (
      <div className="container my-2">
        <h2>NewsMonkey Top Headlines</h2>
        <div className="row my-4">
          <div className="col-md-4">
            <NewsItem
              title="Dummy"
              description="Dummy text"
              imageUrl="..."
              newsUrl="TODO"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
