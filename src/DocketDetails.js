import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";

class DocketDetails extends React.Component{
constructor(props){
    super(props);


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