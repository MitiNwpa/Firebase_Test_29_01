import React, { Component } from 'react';
import firebase from './firestore'
import './index.css'
const db = firebase.firestore();
const refDoc = db.collection('promise');


// .where("cName", '==', 'hrishi')
class ListDockets extends Component {
  constructor() {
    super();
    this.state = {
      items: []
      // status: 'rejected'
    }
    this.changeclass = this.changeclass.bind(this);
    this.approveIt = this.approveIt.bind(this);
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
        <li key={item.id} id={item.id} className={item.site}>
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
  // where('site' , '==', 'rejected')

  changeclass() {
    refDoc.onUpdate((docsnap, index) => {
      docsnap.forEach(doc => {
        console.log('hey')
      });
    })
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

  // approveIt() {
  //   console.log('approved that ')
  //   var stateCopy = Object.assign({}, this.state);
  //   stateCopy.items[4].status = 'approved';
  //   this.setState(stateCopy);
  //   this.forceUpdate();

  // }



  render() {
    return (
      <div>
        All Dockets here
        <button onClick={this.approveIt}>approve it</button>
        <button>reject it</button>
        {this.renderDockets()}

      </div>
    )
  }
}

export default ListDockets;