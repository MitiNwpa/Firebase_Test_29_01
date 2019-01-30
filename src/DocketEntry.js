import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";
import {Link} from '@reach/router';


class DocketEntry extends React.Component{
    
    constructor(){
        super();
        this.state = {
            activityName:'Dirt removal',
            company: 'cndd',
            ccNumber:'6545',
            site:'High Street',
            hours: ''
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      addDocket = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection('dockets').add({
          activityName: this.state.activityName,
          company: this.state.company,
          hours: this.state.hours,
          ccNumber : this.state.ccNumber,
          ccNumber : this.state.ccNumber

        });  
        this.setState({
          hours: ''              
        });
      };





    render(){
     
        return(
            <div>the cost code is {this.state.ccNumber}
            <br/>
            Actiity name {this.state.activityName}
            
            <form onSubmit={this.addDocket}>
                <input 
                type="text"
                name="hours"
                placeholder='Enter Hours'
                onChange={this.updateInput}
                value={this.state.hours}
                />

                <Link to='/confirm'>
                <button type="submit">send</button>
                </Link>
                
              
            </form>
            </div>
        )
    }
}

export default DocketEntry;