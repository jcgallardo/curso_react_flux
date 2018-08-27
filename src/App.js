import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from  './components/LocationList';
import { Grid, Row, Col} from 'react-flexbox-grid';
//import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
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
        /*return (
            <MuiThemeProvider>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <div className="red"></div>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        )
        */

        return (
            <MuiThemeProvider>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <AppBar title="Weather App"></AppBar>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList 
                                cities={cities} 
                                onSelectedLocation={this.handleSelectedLocation}
                            />
                        </Col>
                        <Col cs={12} md={6}>
                            <div className="detail"></div>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
