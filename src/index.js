import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router} from '@reach/router'
import { Link } from '@reach/router'
import Home from './Home';
import Contracts from './Contracts'
import User from './User'
import SiteSelect from './SiteSelect'
import Navigation from './Navigation'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Activity from './Activity';
import DocketEntry from './DocketEntry';
import DocketEntry_1 from './DocketEntry_1';





ReactDOM.render(
<div>
<Router>
                    <Home path='/' />
                    <SiteSelect path='/siteselect' />
                    <User path='/user' />
                    <Contracts path='/contracts' />
                    <Activity path='/activity' />
                    <DocketEntry path='docketentry' />
                    <DocketEntry_1 path='docketentry_1' />
                    
</Router> 
</div>



, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
