import React from 'react';
// import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from "./firestore";



class Contracts extends React.Component {
    showstuff (){
        const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

db.collection("contracts")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var company =doc.data();
            
            console.log(doc.id, " => ", doc.data());
            // console.log(company);
        });
    })
    }

        
    
  render() {
    return (
        <div>
            {this.showstuff()}
   

        </div>
    )
      }
   }

export default Contracts;