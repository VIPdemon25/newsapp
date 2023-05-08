import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=389985488580449db9ff0ccb47a7d1d4&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
    });
    // console.log(parsed_data);
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=389985488580449db9ff0ccb47a7d1d4&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsed_data.articles,
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=389985488580449db9ff0ccb47a7d1d4&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let data = await fetch(url);
      let parsed_data = await data.json();
      this.setState(() => ({
        page: this.state.page + 1,
        articles: parsed_data.articles,
      }));
      console.log(parsed_data);
    }
  };
  render() {
    return (
      <div className="container my-2">
        <h2>NewsMonkey Top Headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page < 2}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
