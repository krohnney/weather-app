import React, { Component } from 'react';
import * as actions from '../actions/weather';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { geoLocation } from '../utils/geoloaction';

class Search extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.currentLocation = this.currentLocation.bind(this);
    }

    async currentLocation () {
        const coords = await geoLocation();
        this.props.getWeatherByCoords(coords.latitude, coords.longitude);
    };

    componentWillMount() {
        this.currentLocation();
    }

    onSubmit = (formProps) => {
        this.props.getWeatherByCity(formProps.search);
        this.props.newSearch(formProps.search);
    };

    render() {

        const { handleSubmit } = this.props;

        return (
            <form className="form-inline"
                  onSubmit={handleSubmit(this.onSubmit)}>
                <Field className="form-control mr-sm-2"
                       type="search"
                       name="search"
                       placeholder="Search city"
                       component="input" />
                <button className="btn btn-outline-primary my-2 my-sm-0">
                    Search</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { city: state.city };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'search' })
)(Search);
