import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './style.css';

class Home extends Component {
  state = {
    users: []
  }
  componentDidMount(){
    axios.get('https://reqres.in/api/users')
      .then(res => {
        this.setState({
          users: res.data.data
        });
      })
  }
  render(){
    const { users } = this.state
    const userList = users.length ? (
      users.map(user => {
        return (
          <div className="users">
            <div className="user-card" key={user.id}>
              <div className="card-content">
                <Link to={'/' + user.id}>
                  <img src={user.avatar} alt="User" />
                </Link>
                <span className="card-title red-text">{user.first_name} {user.last_name}</span>
                <span className="card-title red-text">{user.email}</span>
                <p>{user.body}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">Loading Users...</div>
    );

    return (
      <div>
        <div className="container center">
          <h3 className="center">Users</h3>
          <div className="user-list">
            {userList}
          </div>
        </div>
      </div>
    )
  }
}

export default Home