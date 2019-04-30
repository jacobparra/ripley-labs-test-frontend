import React from 'react'
import moment from 'moment-timezone';
import { ICity } from '../App';
import './City.css'

class City extends React.Component<ICity, {}> {
  render() {
    const timeTz = moment.unix(this.props.weather.time).tz(this.props.weather.timezone);
    return (
      <div className="City">
        <h2>{this.props.name}</h2>
        <p>{this.props.weather.temperature} ℃</p>
        <p>{timeTz.format('HH:mm')}</p>
      </div>
    )
  }
}

export default City;
