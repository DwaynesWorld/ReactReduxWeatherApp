import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherChart from "../components/chart";
import Map from "../components/map";

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (℉)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.renderWeather()}</tbody>
      </table>
    );
  }

  renderWeather = () => {
    return this.props.weather.map(data => {
      const name = data.city.name;
      const { lon, lat } = data.city.coord;
      const temps = _.map(data.list.map(weather => weather.main.temp), temp => {
        return 1.8 * (temp - 273) + 32;
      });
      const humidities = data.list.map(weather => weather.main.humidity);
      const pressures = data.list.map(weather => weather.main.pressure);

      return (
        <tr key={name}>
          <td>
            <Map lat={lat} lon={lon} />
          </td>
          <td>
            <WeatherChart data={temps} color="green" />
          </td>
          <td>
            <WeatherChart data={humidities} color="purple" />
          </td>
          <td>
            <WeatherChart data={pressures} color="blue" />
          </td>
        </tr>
      );
    });
  };
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
