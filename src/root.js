import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './appRoutes';
// import './css/newStyle.css'


class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerOpen: false,
        }
        console.log('root');
    }

    render() {
     //  const { classes } = this.props;
        return (
            <Router>
                <div className='d-flex'>
                    <div className='d-flex flex-column min-vh-100 w-100'>
                        <div className="container-fluid"
                            style={{ padding: 0 }}>
                            <AppRoutes />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

Root.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Root;
