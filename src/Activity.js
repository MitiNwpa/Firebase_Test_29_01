import React from 'react';
import {Link} from '@reach/router';
import DocketEntry from './DocketEntry'

class Activity extends React.Component{

    click(){

        console.log('click works');
        return(
            console.log('retun')
          
        )
  }

    render(){
        return(
            <div>
                <p>This is Activity Selection</p>
                <Link to='/docketentry'>
                <button>
                Dirt</button>
               
                </Link>

                <Link to='/docketentry_1'>
                <button>Fence</button>
                </Link>
            </div>
        )
    }

}

export default Activity;
