import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Sidebar from '../common/drawer';
import Header from '../common/header';
import '../App.css'

class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            name: '',
            email: '',
            phoneNo: '',
            date: '',
            occupation: ''
        }
    }

    componentDidMount() {
        console.log("data")
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
        const transactionData = [
            ["1", "Yonkers",  "20-2-2019", "100.00"],
            ["2", "Hartford", "21-3-2019", "101.00"],
            ["3", "Tampa",    "22-4-2019", "102.00"],
            ["4", "Dallas",   "23-5-2019", "103.00"],
            ["5", "Dallas",   "24-6-2019", "104.00"],
        ];

        const options = {
            filterType: 'checkbox',
            checkbox: 'false'
        };

        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div className="row">
                    <div className="col-md-10" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="card" style={{ marginTop: 70 }}>
                            <button type="submit" className="btn btn-default pull-right" onClick={this.handleClick.bind(this)}>New Transaction</button>

                            <div className="card-header card-header-primary">
                                <h2 className="card-title">Transaction</h2>
                            </div>
                            <div className="card-body">
                                <MUIDataTable
                                    title={"Transaction"}
                                    data={transactionData}
                                    columns={columns}
                                    options={options} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Transaction;