import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col} from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  'Madrid,es',
  'Granada,es',
  'Córdoba,es',
  'Puertollano,es'
];

// Clase principal
class App extends Component {

  render() {
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
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} lg={6}>
              <div className="detail">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
