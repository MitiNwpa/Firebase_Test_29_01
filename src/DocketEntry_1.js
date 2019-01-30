import React from 'react'

class DocketEntry_1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ccNumber:'1234'
        }
    }
    render(){
        return(
            <div>the cost code is {this.state.ccNumber}</div>
        )
    }
}

export default DocketEntry_1;