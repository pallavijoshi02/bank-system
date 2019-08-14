import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar mt-5">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-title">Bank App</li>
                        <li className="nav-item">
                        <Link to="/useraccounts">User Accounts</Link>
                            {/* <a className="nav-link" href=" ">
                                <i className="nav-icon cui-speedometer"></i> User accounts
                            </a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/transactions">Transactions</Link>
                            {/* <a className="nav-link" href=" ">
                                <i className="nav-icon cui-speedometer"></i> Transaction
                            </a> */}
                        </li>
                    </ul>
                </nav>
                <button className="sidebar-minimizer brand-minimizer" type="button"></button>
            </div>
        )
    }
}

export default Sidebar