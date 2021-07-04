import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
  state = {
    user: null
  }
  componentDidMount(){
    let id = this.props.match.params.user_id;
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(res => {
        this.setState({
          user: res.data.data
        });
      });
  }
  render() {

    const user = this.state.user ? (
      <div className="user center">
        <h4 >{this.state.user.first_name} {this.state.user.last_name}</h4>
        <img src={this.state.user.avatar} alt="User" />
        <p>{this.state.user.email}</p>
      </div>
    ) : (
      <div className="center">Loading User...</div>
    );

    return (
      <div className="container">
        {user}
      </div>
    )
  }
}

export default User
