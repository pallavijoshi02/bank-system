import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Redirect } from 'react-router-dom';
import LoginPage from './views/loginPage';
import Profile from './views/profile';
import { UserAccounts } from './views/userAccounts';
import Transaction from './views/transaction';
import NewTransaction from './views/newTransaction';

class appRoutes extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/dashboard" component={Profile} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/useraccounts" component={UserAccounts} />
                    <Route path="/transactions" component={Transaction} />
                    <Route path="/newtransaction" component={NewTransaction} />
                </Switch>
            </React.Fragment>

        );
    }
}
export default appRoutes;
