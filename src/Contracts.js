import React from 'react';
import User from './User'
// import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from "./firestore";


var test = 'cndd';


class Contracts extends React.Component {

    constructor(props){
        super(props);
        this.state={
            rate:'',
            cName:'cndd'
        }
        this.showstuff=this.showstuff.bind(this);
        // this.toggleCompany=this.toggleCompany.bind(this);

    }
    
  
    showstuff() {
        const db = firebase.firestore();

        // console.log(`the props are ${this.props}`)
      db.doc(`contracts/${this.state.cName}`)
      .get()
      .then((snapshot) => {
        // console.log(snapshot.data().hourlyRate)
        var rate123 =(snapshot.data().hourlyRate);
        this.setState({
            rate: rate123,
        })
        // const rate =parseInt('7');

    });
       
    } 



    render() {
        return (
            <div>
                {this.showstuff()}
               <div>
                   <div>
                       <div>
                       this.rate is {this.state.rate}
                       </div>
                   </div>
               </div>


            </div>
        )
    }
}

export default Contracts;