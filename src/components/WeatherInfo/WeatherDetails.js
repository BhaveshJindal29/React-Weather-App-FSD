import React, { Component } from "react";
import './WeatherDetails.css';
export class WeatherDetails extends Component {
  // constructor(props) {
  //   super(props);

  // }

  constructor() {
    super();
  }

  render() {
    let dateNow = new Date();
    //let weatherIcon = "http://openweathermap.org/img/w/" + this.props.weatherIcon + ".png"
    return (
      <div>
        <div>
          <span className="cityLocation">
            {this.props.cityName}, {this.props.cityCountry},{" "}{dateNow.toDateString()}
          </span>
          <br />

          <div className="detailsDiv">
            <div className="leftSide">
              <h1>
                <span className="weatherIcon">
                  {/* {this.props.cityTemperature}&deg;C <img src={weatherIcon} /> */}
                </span>
              </h1>
            </div>
            <div className="rightSide">
              <p className="weatherDetailsIndividual">
                Weather: <b>{this.props.cityWeatherDescription}</b><br />
                Wind: <b>{this.props.cityWind} km/hr</b><br /><br />
                Humidity: <b>{this.props.cityHumidity}%</b> <br />
                Pressure: <b> {this.props.cityPressure} Pa</b><br /><br />
                Max Temp: <b>{this.props.cityMaxTmp}&deg;C </b><br />
                Min Temp: <b>{this.props.cityMinTmp}&deg;C</b><br /> <br />
                Sunrise : <b> {this.props.citySunrise}</b><br />
                Sunset: <b> {this.props.citySunset}</b><br />
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#FFFFFF",
            boxShadow: "0px 4px 32px rgba(143, 143, 143, 0.4)",
            borderRadius: "4px",
            padding: "10px",
            marginTop: "10px",
            paddingBottom: "10px",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        >
          {/* <AddComment></AddComment> */}
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default WeatherDetails;
