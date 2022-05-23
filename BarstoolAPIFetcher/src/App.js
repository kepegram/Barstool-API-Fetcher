import React from "react";
import './App.css'

export default class App extends React.Component {
  state = {article: []};

  async componentDidMount() {
    const scrape = await fetch("https://www.jalirani.com/files/barstool.json")
    const data = await scrape.json();
    this.setState({ article: data})
  };

  render() {
    return (
      <div>
        {this.state.article.map(scrape => (
          <div id = "info" key = {scrape.id}>
            <img id = "pics" alt="" src = {scrape.thumbnail.location + scrape.thumbnail.images.medium}></img>
            <a id = "txt" href={scrape.url}>{scrape.title}</a>
            <div id = "name">{scrape.author.name}</div>
            <img id = "pfp" alt = "" src = {scrape.author.avatar}></img>
            <div id = "comment"> Comments: {scrape.comment_count}</div>
          </div>
        ))}
      </div>
    );
  }
}