import React, { Component } from "react";
import '../css/loginPage.css';

class LoginPage extends Component {
    constructor(props){
        super(props);

        //make sure it knows that this function is pointing to the class VERY IMPROTANT
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username : '',
            password : '',
        };
    }

    userArray = [
        { username: 'user1@gmail.com', password: 'password1' },
        { username: 'user2@gmail.com', password: 'password2' },
        // Add more users as needed
    ];

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }

      onSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;

        // Find the user
        const user = this.userArray.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } 
    render() {
        return (
            <div className="login-page">
                <section class="vh-100">
                <div class="container-fluid h-custom mt-3">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid" alt="Sample image"/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <form onSubmit={this.onSubmit}>
                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example3">Email address</label>
                            <input type="email" id="form3Example3" class="form-control form-control-lg"
                            placeholder="Enter a valid email address" style={{ color: 'white' }}
                            value={this.state.username}
                            onChange={this.onChangeUsername}/>
                        </div>

                        <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form3Example4">Password</label>
                            <input type="password" id="form3Example4" class="form-control form-control-lg"
                            placeholder="Enter password" style={{ color: 'white' }}
                            value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <div class="form-check mb-0">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label class="form-check-label" for="form2Example3">
                                Remember me
                            </label>
                            </div>
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
                            style={{
                                paddingLeft: '2.5rem',
                                paddingRight: '2.5rem',
                                border: '1px solid white'
                            }}>Login</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0" style={{ color: 'white' }}>Don't have an account? <a href="#!"
                                class="link-danger">Register</a></p>
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

export default LoginPage;