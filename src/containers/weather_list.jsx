import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.renderWeather()}</tbody>
      </table>
    );
  }

  renderWeather = () => {
    return this.props.weather.map(data => {
      const name = data.city.name;
      const temps = data.list.map(weather => weather.main.temp);
      const humidities = data.list.map(weather => weather.main.humidity);
      const pressures = data.list.map(weather => weather.main.pressure);

      return (
        <tr key={name}>
          <td>{name}</td>
          <td>
            <Sparklines data={temps} height={120} width={180}>
              <SparklinesLine color="red" />
            </Sparklines>
          </td>
        </tr>
      );
    });
  };
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(
  mapStateToProps,
  null
)(WeatherList);
