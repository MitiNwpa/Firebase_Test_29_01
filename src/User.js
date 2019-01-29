import React from 'react';
import Contracts from './Contracts'
import Display from './Display'

// import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from "./firestore";


class User extends React.Component {

    constructor() {
        super();
        this.state = {
         lastname: '',
         fullname: '',
         hours: '',
         company:''
        };
      }

      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection('test').add({
          fullname: this.state.fullname,
          lastname: this.state.lastname,
          hours: this.state.hours,
          company : this.state.company
        });  
        this.setState({
          fullname: '',
          lastname: '',
          hours: ''  ,
          company : ''      
        });
      };





  render() {
    return (
        <div>
                    <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.fullname}
 
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={this.updateInput}
            value={this.state.lastname}
          />
              <input
            type="text"
            name="hours"
            placeholder="Hours worked"
            onChange={this.updateInput}
            value={this.state.hours}
          />
                    <input
            type="company"
            name="company"
            placeholder="Company"
            onChange={this.updateInput}
            value={this.state.company}
          />
          
          
          <button type="submit" onSubmit={this.addUser}>Submit</button>
        </form>
                <Display />
       </div>
        );
      }
   }

export default User;