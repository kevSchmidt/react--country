import React from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userInput: "",
      loading: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios(`https://restcountries.eu/rest/v2/name/${this.state.userInput}`).then(
      (res) => {
        // console.log(res);
        const { data } = res;
        this.setState({ data });
      }
    );
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value.trim(),
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  render() {
    const { data } = this.state;
    if (this.state.loading) return <Loading />;

    return (
      <React.Fragment>
        <h1 className="app-title">DESTINATION</h1>

        <form onSubmit={this.handleSubmit} className="app-form">
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder="Search for a country..."
            className="input-form"
          />
          <button type="submit" className="btn-form">
            Search
          </button>
        </form>

        <Country data={data} />
      </React.Fragment>
    );
  }
}
