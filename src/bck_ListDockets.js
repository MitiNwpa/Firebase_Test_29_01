import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";
import ListBois from './ListBois'



class ListDockets extends React.Component {

    constructor() {
        super();
        this.state={
            items:[]
        }
        this.createList = this.createList.bind(this);

    }

    createList() {
        const db = firebase.firestore();

        db.collection('promise').get().then((snapshot) => {
            let items =[]
            snapshot.docs.forEach(doc => {
                // items.push(doc.data())
                    this.setState({
                    items:doc.data()                   
                })
            
            })
        })
    }

componentWillMount(){
    this.createList()
}



render() {
        return (
               <div> does this work
                   <ListBois items = {this.state.items} />
               {/* {this.renderDockets} */}
               </div> 

        )
    }

}

export default ListDockets;