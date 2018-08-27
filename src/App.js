import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from  './components/LocationList';
//import logo from './logo.svg';
import './App.css';

const cities = [
  'Madrid,es',
  'Granada,es',
  'Córdoba,es',
  'Puertollano,es'
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList 
            cities={cities} 
            onSelectedLocation={this.handleSelectedLocation}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
