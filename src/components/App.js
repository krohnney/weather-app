import React from 'react';
import Header from './Header';
import PreviousSearches from './PreviousSearches';
import CurrentSearch from './CurrentSearch';

export default ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <CurrentSearch />
                <div className="row">
                    <div className="col-md-3">
                        <PreviousSearches />
                    </div>
                    <div className="col-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
