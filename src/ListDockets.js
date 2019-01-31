import React, { Component } from 'react';
import firebase from './firestore'

const db = firebase.firestore();
const refDoc = db.collection('promise');


// .where("cName", '==', 'hrishi')
class ListDockets extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
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

  deleteDocket = (e) => {
    refDoc.doc(e.target.value).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

    handleChange = (e) => {
      const t = e.target
      this.setState({
        [t.name]: t.value
      })
    }


    renderDockets() {
      const ListItem = this.state.items.map((item, index) => {
        return (
          <li key={index}>
            {item.email}
            <br />
            {item.company}

            <button value={item.id} onClick={this.deleteDocket}>X</button>
            <div>
              approval status is {item.site}
            </div>
          </li>
        )
      })

   

      return (
        <ul>
          {ListItem}
        </ul>
      )
    }


    // renderDockets() {
    //   const ListItem = this.state.items.map((item, index) => {
        
    //       (item.site == 'approved' ? 
    //       return (
    //       <ul>
    //       <li key={index}>
    //         {item.email}
    //         <br />
    //         {item.company}

    //         <button value={item.id} onClick={this.deleteDocket}>X</button>
    //         <div>
    //           approval status is {item.site}
    //         </div>
    //       </li>
    //       </ul>
    //     ):return (
    //       <ul id='complete'>
    //       <li key={index}>
    //         {item.email}
    //         <br />
    //         {item.company}

    //         <button value={item.id} onClick={this.deleteDocket}>X</button>
    //         <div>
    //           approval status is {item.site}
    //         </div>
    //       </li> )
    //   })

   

    //   return (
    //     <ul>
    //       {ListItem}
    //     </ul>
    //   )
    // }
















    
    approvedDockets(){
      var checked = refDoc.where('site', '==', 'approved')
    }


  render() {
    return (
      <div>
        All Dockets here
                {this.renderDockets()}
      </div>
    )
  }
}

export default ListDockets;