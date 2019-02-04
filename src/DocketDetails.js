import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";
const db = firebase.firestore();
const refDoc = db.collection('promise');

class DocketDetails extends React.Component{
constructor(props){
    super(props);
}

componentWillMount() {
    refDoc.onSnapshot((docSnapShot) => {
      let items = []

      docSnapShot.forEach(doc => { items.push(doc.data()) })
      this.setState({
        items,
        loaded: true
      })
    })
  }



render(){
    return(
        <div>
            its me your boi number {this.props.userID}

        </div>
   
    )
}
}

export default DocketDetails;