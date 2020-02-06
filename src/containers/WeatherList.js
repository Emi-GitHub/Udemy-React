import React, { Component } from 'react';
import { connect } from 'react-redux';
import chart from '../components/chart';
//video 404 stop!

class WeatherList extends Component {
    renderWeather(cityData){
        console.log(cityData.city.name)
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.min.temp)
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <chart data={temps} color="orange"/>
                </td>
            </tr>
        )
    }
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
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList)
