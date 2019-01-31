import React from 'react';
import { Link } from '@reach/router';
import 'firebase/firestore';
import firebase from "./firestore";
import ListDockets from './ListDockets';

class ListBois extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items : []
        }
        this.renderList=this.renderList.bind(this);
    }

renderList(){
/* this.setState({
    items:[this.props.items]
}) */

/* this.state.items.map((hey) => {
    return(
        <div>
 <li>please work{hey.cName}</li>
        </div>
       
    )
}); */

/* var list = this.props.items.data.map((x) => {
    return(
        <div>
            <li>{x.cName}</li>
        </div>
    )
}) */

    console.log(this.props.items)
    // const data=this.props;
    // const items = this.props.items.map((e)=>{
    //     return <li>e</li>
    //   })
       
}

componentDidMount(){
    // this.renderList()
}




    render()
    {
        return(

            <div> Does this work from inside
      {}
      <button onClick={this.renderList}></button>
            </div>
        )
    }

}

export default ListBois;