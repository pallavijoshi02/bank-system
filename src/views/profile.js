import React, { Component } from 'react';
import Sidebar from '../common/drawer';
import Header from '../common/header';
import TextField from '@material-ui/core/TextField';

class Profile extends Component {
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div className="row">
                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="card" style={{ marginTop: 70 }}>
                            <div className="card-header card-header-primary">
                                <h2 className="card-title">New Transaction</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <TextField
                                        id="standard-name"
                                        label="Name"
                                        className="form-control"
                                        value=""
                                        // onChange={this.handleChange.bind(this)}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-name"
                                        label="Email"
                                        className="form-control"
                                        value=""
                                        //  onChange={this.handleChange.bind(this)}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-name"
                                        label="Mobile No."
                                        className="form-control"
                                        value=""
                                        // onChange={this.handleChange.bind(this)}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-name"
                                        label="Occupation"
                                        className="form-control"
                                        value=""
                                        // onChange={this.handleChange.bind(this)}
                                        margin="normal"
                                    />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
