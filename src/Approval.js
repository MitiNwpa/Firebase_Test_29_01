import React, {Component} from 'react';
import firebase from './firestore'

const db = firebase.firestore();
const refDoc = db.collection('promise');


const divStyle = {
    color: 'red',
    border: '50px solid pink'
  };


// .where("cName", '==', 'hrishi')
class Approval extends Component{
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }

    componentWillMount () {
        refDoc.onSnapshot((docSnapShot) => {
          let items = []
          docSnapShot.forEach(doc => {items.push(doc.data())})
          this.setState({
            items,
            loaded: true
          })
        })
      }

      deleteDocket = (e) => {
        refDoc.doc(e.target.value).delete().then(function() {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
      }

      approveDocket = (e) => {
        refDoc.doc(e.target.value).update({
            'site' :"Accepted"
           
        }
        
        )
    }

    rejectDocket = (e) => {
        refDoc.doc(e.target.value).update({
            'site' :"rejected"
            
        }
        
        )
    }

      renderDockets () {
        const ListItem = this.state.items.map((item, index) => {
          return (
            <li key={index}>
              {item.email}
              <br/>
              {item.company}

              <button value={item.id} onClick={this.rejectDocket}>X</button>
              <button value={item.id} onClick={this.approveDocket}> ✓</button>

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

 
    render(){
        return(
            <div style={divStyle}>
                Approval stage
                <br />
                I am the site engineeeerrrr
                {this.renderDockets()}
            </div>
        )
    }
}

export default Approval;