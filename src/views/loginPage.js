// import React, { Component } from 'react';

// class LoginPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             submitted: false
//         };

//     }

//     componentDidMount() {
//         this.setState({
//             username: '',
//             password: ''
//         })
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit(e) {
//         // e.preventDefault();
//         // const { username, password } = this.state;
//         // if (username && password) {
//         //     dispatch(userActions.login(username, password));
//         // }
//     }

//     render() {
//         const { username, password, submitted } = this.state;
//         return (
//             <div className="col-md-6 col-md-offset-3">
//                 <div className="alert alert-info">
//                     Username: test<br />
//                     Password: test
//                 </div>
//                 <h2> User Login</h2>
//                 <form name="form" onSubmit={this.handleSubmit}>
//                     <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
//                         <label htmlFor="username">Username</label>
//                         <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange.bind(this)} />
//                         {submitted && !username &&
//                             <div className="help-block">Username is required</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange.bind(this)} />
//                         {submitted && !password &&
//                             <div className="help-block">Password is required</div>
//                         }
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary">Login</button>

//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// export default LoginPage;



import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(e) {
       window.location("/dashboard")
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <div className="alert alert-info">
                    Username: test<br />
                    Password: test
                </div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange.bind(this)} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange.bind(this)} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;