import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherStatus from './WeatherStatus';
import arrowSvg from '../arrow.svg';

class Weather extends Component {

    render() {
        const { weather }  = this.props;

        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            { weather ? (
                                <div className="row">
                                    <div className="col-4">
                                        <WeatherStatus icon={weather.status.icon}
                                                       main={weather.status.main}
                                                       description={weather.status.description} />
                                    </div>
                                    <div className="col">
                                        <table style={{width: '50%'}}>
                                            <tbody>
                                            <tr>
                                                <td><small>Temperature</small></td>
                                                <td><strong>{ weather.temp }°C</strong></td>
                                            </tr>
                                            <tr>
                                                <td><small>Wind speed</small></td>
                                                <td><strong>{ weather.windSpeed }mph</strong></td>
                                            </tr>
                                            <tr>
                                                <td><small>Wind direction</small></td>
                                                <td><img src={arrowSvg} alt="" style={{
                                                    width: '16px',
                                                    transform: `rotate(${weather.windDirection}deg)`
                                                }}/></td>
                                            </tr>
                                            <tr>
                                                <td><small>Humidity</small></td>
                                                <td><strong>{ weather.humidity }%</strong></td>
                                            </tr>
                                            <tr>
                                                <td><small>Sunrise</small></td>
                                                <td><strong>{ weather.sunrise }</strong></td>
                                            </tr>
                                            <tr>
                                                <td><small>Sunset</small></td>
                                                <td><strong>{ weather.sunset }</strong></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : '' }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        city: state.data.city,
        weather: state.data.weather
    };
}

export default connect(mapStateToProps)(Weather);
