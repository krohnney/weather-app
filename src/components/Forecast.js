import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weekday } from '../utils/general';
import WeatherStatus from './WeatherStatus';

class Forecast extends Component {

    render() {
        const { forecast }  = this.props;

        return (
            <div className="row">
                { forecast ? forecast.map((forecast, index) => (
                    <div className="col-lg-2" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h6>{weekday[forecast.day]}</h6>
                                <WeatherStatus icon={forecast.icon}
                                               main={forecast.main}
                                               description={forecast.description} />
                                <p className="m-0 d-flex justify-content-between">
                                    <small>humidity:</small> <strong>{forecast.humidity}</strong>
                                </p>
                                <p className="m-0 d-flex justify-content-between">
                                    <small>min:</small> <strong>{forecast.min}</strong>
                                </p>
                                <p className="m-0 d-flex justify-content-between">
                                    <small>max:</small> <strong>{forecast.max}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                )) : '' }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        forecast: state.data.forecast,
    };
}

export default connect(mapStateToProps)(Forecast);
