import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weather from './weather';

export default combineReducers({
    data: weather,
    form: formReducer
});
