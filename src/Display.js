import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";

class Display extends React.Component{

constructor(){
    super();
    this.state={
        company:'',
        fullname:'',
        hours:'',
        lastname: ''
    }
    this.readData=this.readData.bind(this);
}


    readData() {
        const db = firebase.firestore();
     db.doc(`test/nTtOkGHzHLBbQQg6Rpiz`)
      .get()
      .then((snapshot) => {

      
        this.setState({
            company:snapshot.data().company,
            fullname:snapshot.data().fullname,
            hours:snapshot.data().hours,
            lastname: snapshot.data().CC2
        })
    });
       
    }


    render(){
        return(
            <div onLoad={this.readData()}>
            fullname {this.state.fullname}
            <br />
            company name 
            <br />
            hours {this.state.hours}
            <br />
            lastname {this.state.lastname}

            </div>
        )
        }
}

export default Display;