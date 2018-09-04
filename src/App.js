import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from  './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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

    constructor(){
        super();
        this.state = { city : null }
    }

    handleSelectedLocation = city => {
        this.setState({city})
    }

    render() {
        const {city} = this.state;

        return (
            <MuiThemeProvider>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <AppBar title="Weather App"></AppBar>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6}>
                            <LocationList 
                                cities={cities} 
                                onSelectedLocation={this.handleSelectedLocation}
                            />
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="detail">
                                { 
                                    city ?
                                    <ForecastExtended city={city}></ForecastExtended> :
                                    null
                                }
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
