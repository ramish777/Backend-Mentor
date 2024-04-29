import React, { Component } from "react";

class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            password: '',
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    userArray = [
        { name: 'user1', username: 'user1@gmail.com', password: 'password1' },
        { name: 'user2', username: 'user2@gmail.com', password: 'password2' },
    ];

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { name, username, password } = this.state;

        const isUserExist = this.userArray.some(user => user.username === username);

        if (isUserExist) {
            alert('User already exists. Please try with a different username.');
        } else {
            this.userArray.push({ name, username, password });

            alert('User added successfully!');
            
            this.setState({
                name: '',
                username: '',
                password: '',
            });
        }
    }

    render() {
        return (
            <div className="login-page">
                <section className="vh-100">
                    <div className="container-fluid h-custom mt-3">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="name">Name</label>
                                        <input type="text" id="name" className="form-control form-control-lg"
                                            placeholder="Enter your name" style={{ color: 'white' }}
                                            value={this.state.name}
                                            onChange={this.onChangeName} />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        <input type="email" id="form3Example3" className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" style={{ color: 'white' }}
                                            value={this.state.username}
                                            onChange={this.onChangeUsername} />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                        <input type="password" id="form3Example4" className="form-control form-control-lg"
                                            placeholder="Enter password" style={{ color: 'white' }}
                                            value={this.state.password}
                                            onChange={this.onChangePassword} />
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="submit" className="btn btn-primary btn-lg"
                                            style={{
                                                paddingLeft: '2.5rem',
                                                paddingRight: '2.5rem',
                                                border: '1px solid white'
                                            }}>Register</button>
        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignUpPage;
