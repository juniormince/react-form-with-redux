import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SnackList from '../SnackList/SnackList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(40deg, #D7006E 5%, #FFCFC4 80%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        fontWeight: "bold",
        height: 28,
        margin: 5,
        padding: '0 30px',
        boxShadow: '1px 2px 2px 1px #C90060',
      },
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newSnack: '',
    };

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
    // const action = { type: 'ADD_SNACK', snack: this.state.newSnack }
    this.props.dispatch({ type: 'ADD_SNACK', snack: this.state.newSnack });   //trying it the one-liner way              
    this.setState({
      newSnack: '',
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>

        <div className="App">
          <h3>IT'S FOR SNACKS</h3>
          <TextField
          label="snack it up"
          placeholder="s n a c k s"
          onChange={this.handleChange}
          value={this.state.newSnack} 
          margin="normal"
        />
          <Button onClick={this.submitSnax}>s n a c k</Button>
          <SnackList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
