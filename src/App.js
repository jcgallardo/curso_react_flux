import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from  './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { Grid, Row, Col} from 'react-flexbox-grid';
import {store} from './store';
import {setCity} from './actions';
import AppBar from 'material-ui/AppBar';
import './App.css';

const cities = [
  'Madrid,es',
  'Granada,es',
  'Córdoba,es',
  'Puertollano,es'
];



// Clase principal
class App extends Component {

    constructor(){
        super();
        this.state = { city : null }
    }

    handleSelectedLocation = city => {
        this.setState({city})
        store.dispatch(setCity(city));
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
