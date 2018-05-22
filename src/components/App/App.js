import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newSnack: '',
    }

  }

  // tracking snack input field
  handleChange = (event) => {
    this.setState({
      newSnack: event.target.value
    });
  }

  // quick, snack to the reducer mobile!
  submitSnax = (event) => {
    event.preventDefault(); //hey browser html we got it
    const action = { type: 'ADD_SNACK', snack: this.state.newSnack }
    this.props.dispatch(action);                 
    this.setState({
      newSnack: '',
    });
  }

  render() {
    return (
      <div className="App">
        <h3>IT'S FOR SNACKS</h3>

        <form onSubmit={this.submitSnax}>
          <input onChange={this.handleChange} value={this.state.newSnack} />
          <input type="submit" value="snack it" />
        </form>

      </div>
    );
  }
}

export default connect()(App);
