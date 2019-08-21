import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Sidebar from '../common/drawer';
import Header from '../common/header';
import { connect } from 'react-redux';
//import api from '../api/index'
import axios from 'axios';


class UserAccounts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: '',
        }
    }
    
    componentDidMount() {
        axios.get(`http://dhruvil-bank-app.herokuapp.com/users`)
            .then(resp => {
                //on success
                console.log("data", resp.data)
                this.setState({
                    userData: resp.data
                });
            }).catch((error) => {
                //on error
                alert("There is an error in API call.");
            });
    }

    handleClick() {
        axios.get(`http://localhost:3000/users`)
        .then(data => {
            //on success
            console.log("data", data)
            this.setState({
                userData: data.data,
            });
        }).catch((error) => {
            //on error
            alert("There is an error in API call.");
        });
        window.location.replace('/transactions')
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
        var button = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleClick.bind(this)}>
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>

        const columns = ["Account No.", "Account Type", "View"];
        const userAccountsData = [ this.state.userData ,button ];

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
                            <div className="card-header card-header-primary">
                                <h2 className="card-title">User Accounts</h2>
                                {/* <button type="submit" className=" btn-default pull-right" onClick={this.handleClick.bind(this)}>Add User</button> */}
                            </div>
                            <div className="card-body">
                                <MUIDataTable
                                    title={"User Table"}
                                    data={userAccountsData}
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



function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(UserAccounts);
export { connectedApp as UserAccounts };

