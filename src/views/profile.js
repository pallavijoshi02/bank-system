import React, { Component } from 'react';
import Sidebar from '../common/drawer';
import Header from '../common/header';
import '../App.css';
//import api from '../api/index'
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            city: '',
            bank:'',
            branch: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/users`)
        .then(data => {
            //on success
            console.log("data", data)
            this.setState({
                userData: data.data
            });
        }).catch((error) => {
            //on error
            alert("There is an error in API call.");
        });
       
        // this.setState({
        //     name: 'abc',
        //     email:'abc@123.com',
        //     city:'udaipur',
        //     bank:'HDFC',
        //     branch:'durga nursry'
        // })
    }

    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div className="row">
                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="card" style={{ marginTop: 70 }}>
                            <div className="card-header card-header-primary">
                                <h2 className="card-title">Profile</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group label">
                                        <label>Name:</label> {this.state.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group label">
                                        <label>Email:</label> {this.state.email}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group label">
                                        <label>City:</label> {this.state.city}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group label">
                                        <label>Bank:</label> {this.state.bank}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group label">
                                        <label>Branch:</label> {this.state.branch}
                                    </div>
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
