import React from 'react';
import {Link} from '@reach/router';
import firebase from './firestore'
import { navigate } from '@reach/router';
import DocketEntry from './DocketEntry'
const db = firebase.firestore();
const refDoc = db.collection('activity');



class Activity extends React.Component{

    constructor(props){
        super(props);
        this.state ={
       items:[]

        }
        this.renderActivityList=this.renderActivityList.bind(this);
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


      renderActivityList(){
          const ActivityList = this.state.items.map((item,index) => {
            return(
                <li key={item.id} id={item.id} >
                    {item.activityName}
                    <br/>
                    {item.site}
                    <br/>
                   Assigned Company {item.company}
                    <br/>
                    <button onClick={() => navigate(`/docketentry/${item.id}`)}>
                        Select
                    </button>

                </li>
            )

          })

          return(
            <div>
                {ActivityList}
            </div>
          )
      }







    render(){
        return(
            <div>
                <p>This is Activity Selection</p>
                {/* <Link to='/docketentry'>
                <button>
                Dirt</button>
               
                </Link>

                <Link to='/docketentry_1'>
                <button>Fence</button>
                </Link> */}

                <div>
                    {this.renderActivityList()}
                </div>
            </div>
        )
    }

}

export default Activity;
