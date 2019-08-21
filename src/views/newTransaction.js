import React, { Component } from 'react';
import Sidebar from '../common/drawer';
import Header from '../common/header';
import TextField from '@material-ui/core/TextField';
//import api from '../api/index'
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap'

class NewTransaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: '',
            occupation: '',
            date: ''
        }
    }

    saveClick() {
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
        window.location.replace('/transactions')
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
                                <h2 className="card-title">New Transaction</h2>
                            </div>
                            <div className="card-body">
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Group controlId="formGridAddress2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as="select">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>


                                    <Button className="pull-right" variant="primary" type="submit">
                                        Submit
                                             </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTransaction;
