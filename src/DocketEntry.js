import React from 'react'

class DocketEntry extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            ccNumber:'2353'
        }
    }
    render(){
     
        return(
            <div>the cost code is {this.state.ccNumber}</div>
        )
    }
}

export default DocketEntry;