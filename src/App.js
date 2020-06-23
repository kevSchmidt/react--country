import React from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";
import axios from "axios";

const URL_API = `https://restcountries.eu/rest/v2/name/germany`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      userInput: "",
      loading: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
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

    axios(URL_API).then((res) => {
      const { ...props } = res.data;
      this.setState({ data: { ...props } });
    });
  }

  render() {
    const { data } = this.state;

    if (this.state.loading) return <Loading />;
    return (
      <React.Fragment>
        <h1>Country App</h1>
        <form onChange={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder="Enter a county"
          />
          <button type="submit">Search</button>
        </form>
        <Country data={data} />
      </React.Fragment>
    );
  }
}
