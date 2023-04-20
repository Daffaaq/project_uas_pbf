import React, { Component } from 'react';
import Dashboard from './dashboard';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Login data:', this.state);
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Dashboard username={this.state.username} />;
    }

    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
