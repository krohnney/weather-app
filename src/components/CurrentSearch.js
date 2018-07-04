import React, { Component } from 'react';
import {connect} from 'react-redux';

class CurrentSearch extends Component {

    render() {
        const { city }  = this.props;

        return (
            <div>
                { city ? (
                    <h1 className="display-4 mt-4 mb-4 text-uppercase">{city}</h1>
                ) : ''}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        city: state.data.city,
    };
}

export default connect(mapStateToProps)(CurrentSearch);
