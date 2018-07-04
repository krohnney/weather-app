import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/weather';

class PreviousSearches extends Component {

    render() {
        const { previous }  = this.props;

        return (
            <ul className="list-group">
                <label className="text-uppercase">Last 5 searches</label>
                { previous.length ? previous.map((previousSearch, index) => (
                    <button type="button"
                            key={index}
                            onClick={() => this.props.getWeatherByCity(previousSearch)}
                            className="list-group-item list-group-item-action">
                        {previousSearch}
                    </button>
                )) : '' }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        previous: state.data.previous,
    };
}

export default connect(mapStateToProps, actions)(PreviousSearches);
