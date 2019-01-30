import React from 'react'

class DocketEntry_1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activityName:'Dirt removal',
            company: 'cndd',
            ccNumber:'1234',
            site:'High Street'
        }
    }
    render(){
        return(
            <div>the cost code is {this.state.ccNumber}</div>
        )
    }
}

export default DocketEntry_1;