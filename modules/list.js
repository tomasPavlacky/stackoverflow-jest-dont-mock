import React from 'react';
import fetch from "action/xhr";

class List extends React.Component {
  constructor(props) {
    // Fetch should be mocked. But is not.
    console.log("+++++++");
    console.log(fetch);
    console.log("+++++++");

    super(props);

    this.state = { data: [<li>John</li>] };
  }

  componentDidMount() {
    this.setState({data: fetch()});
  }

  render() {
    return <ul>{this.state.data}</ul>;
  }
}

module.exports = List;
