import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=389985488580449db9ff0ccb47a7d1d4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   const prevPage = this.state.page - 1;

  //   if (prevPage >= 1) {
  //     this.setState({ page: prevPage }, () => {
  //       this.updateNews();
  //     });
  //   }
  // };

  // handleNextClick = async () => {
  //   const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
  //   const nextPage = this.state.page + 1;

  //   if (nextPage <= totalPages) {
  //     this.setState({ page: nextPage }, () => {
  //       this.updateNews();
  //     });
  //   }
  // };
  fetchMoreData = async () => {
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    const nextPage = this.state.page + 1;

    if (nextPage <= totalPages) {
      this.setState({ page: nextPage }, async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=389985488580449db9ff0ccb47a7d1d4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsed_data = await data.json();
        this.setState({
          articles: this.state.articles.concat(parsed_data.articles),
          totalResults: parsed_data.totalResults,
        });
      });
    }
  };

  render() {
    return (
      <>
        <h2 className="text-center">
          NewsMonkey Top Headlines from{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      // publishTime={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
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
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
