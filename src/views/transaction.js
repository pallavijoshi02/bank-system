import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Sidebar from '../common/drawer';
import Header from '../common/header';
import '../App.css';
import api from '../api/index'
import { Button } from 'react-bootstrap'
class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            name: '',
            email: '',
            phoneNo: '',
            date: '',
            occupation: '',
            transactionData: '',
        }
    }

    componentDidMount() {
        api.app.get("/transactions")
            .then(res => {
                //on success
                console.log()
                this.setState({
                    transactionData: res.data
                });
            }).catch((error) => {
                //on error
                alert("There is an error in API call.");
            });
    }
    handleClick() {
        window.location.replace('/newtransaction')
    }

    resetValues() {
        this.setState({
            name: '',
            email: '',
            phoneNo: '',
            date: '',
            occupation: ''
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
        this.resetValues();
    }
    renderButton() {
        if (this.state.mode === 'view') {
            return (
                <button name='edit'>
                    Edit
              </button>
            );
        } else {
            return (
                <button name="delete">
                    delete
              </button>
            );
        }
    }

    saveClick() {
        console.log("name", this.state.name)
        console.log("email", this.state.email)
        console.log("date", this.state.date)
        console.log("occupation", this.state.occupation)
        console.log("phoneNo", this.state.phoneNo)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const columns = ["ID", "Category", "Date", "Amount"];

        const options = {
            filterType: 'checkbox',
            checkbox: 'false'
        };

        return (
            <div className="content">
                <Sidebar />
                <Header />
                    <div className="col-md-10" style={{ marginLeft: 250, padding: 38 }}>
                    <Button className="new-button pull-right" onClick={this.handleClick.bind(this)} variant="primary" type="submit">
                                    New Transaction
                          </Button>
                        <div className="card" style={{ marginTop: 70 }}>
                        
                               <div className="card-header card-header-primary">
                                <h2 className="card-title">Transaction</h2>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group label">
                                        <label>Name:</label> {this.state.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group label">
                                        <label>Account No:</label> {this.state.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group label">
                                        <label>Account Type:</label> {this.state.name}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group label">
                                        <label>Account Balance:</label> {this.state.name}
                                    </div>
                                </div>
                                <br />
                                <MUIDataTable
                                    title={"Transaction"}
                                    //data={this.state.transactionData}
                                    columns={columns}
                                    options={options} />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Transaction;