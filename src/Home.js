import React from 'react'
import {Router} from '@reach/router'
import { Link } from '@reach/router'
import Contracts from './Contracts'
import User from './User'
import SiteSelect from './SiteSelect'
import Navigation from './Navigation'
import ListDockets from './ListDockets';

 


class Home extends React.Component{

    render(){
        return(
            <div>
                <p>this is home</p>
                <Link to='/siteselect'>
                <button>Goto Site Selection</button>
                </Link>

                <ListDockets />
            </div>
              
               
        )
    }
}

export default Home;