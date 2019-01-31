import React from 'react'
import {Router} from '@reach/router'
import { Link } from '@reach/router'
import Home from './Home'

import Contracts from './Contracts'
import User from './User'
import SiteSelect from './SiteSelect'

 

const bg={color:'blue',
backgroundColor:'red'}
class Navigation extends React.Component{

    render(){
        return(
            <div style={bg}>
                          Welcome Indiana    
          
                </div>
              
               
        )
    }
}

export default Navigation;