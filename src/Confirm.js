import React from 'react';
import { Link } from '@reach/router';
import 'firebase/firestore';
import firebase from "./firestore";

const db = firebase.firestore();
const refDoc = db.collection('promise');

class Confirm extends React.Component {

    constructor() {
        super()
        this.state = {
            cName:'' ,
            email: '',
            hRate: '',
            oRate: '',
            activityName: '',
            company: '',
            ccNumber:'',
            site: '',
            hours: '',
            totalHours: ''
        }
        this.renderUser = this.renderUser.bind(this);
        this.renderDocket = this.renderDocket.bind(this);
        this.calcHours = this.calcHours.bind(this)
        this.addDocket = this.addDocket.bind(this);
   
    }
    componentDidMount(){
        this.renderDocket();
    }

/*     componentWillMount() {
        this.renderUser();
        this.renderDocket();

    }
    componentDidMount() {
        // this.calcHours();

    } */

/*     renderUser = e => {
        console.log('user renderer')
        // e.preventDefault();
        const db = firebase.firestore();
        db.doc(`user/cndd`)
            .get()
            .then((snapshot) => {


                this.setState({
                    cName: snapshot.data().cName,
                    email: snapshot.data().email,
                    hRate: snapshot.data().hRate,
                    oRate: snapshot.data().oRate
                })
            });
    } */

/*     renderDocket = e => {
        console.log('docket renderer')

        // e.preventDefault();
        const db = firebase.firestore();
        db.doc(`dockets/ixzBKWPXD8zuPPsBW1a4`)
            .get()
            .then((snapshot) => {

                this.setState({
                    activityName: snapshot.data().activityName,
                    ccNumber: snapshot.data().email,
                    company: snapshot.data().company,
                    hours: snapshot.data().hours
                })
            });
    } */

    renderUser = e => {
     var promise = firebase.firestore().doc(`user/cndd`).get();
            promise.then((snapshot) => {


                this.setState({
                    cName: snapshot.data().cName,
                    email: snapshot.data().email,
                    hRate: snapshot.data().hRate,
                    oRate: snapshot.data().oRate
                })
                this.calcHours();
            })
            .catch(error => {

            })
    }

    renderDocket = e => {

        console.log('docket renderer')

        // e.preventDefault();
        var promise =firebase.firestore().doc(`dockets/ixzBKWPXD8zuPPsBW1a4`).get();
            promise.then((snapshot) => {
               
                this.setState({
                    activityName: snapshot.data().activityName,
                    ccNumber: snapshot.data().ccNumber,
                    company: snapshot.data().company,
                    hours: snapshot.data().hours
                })
                this.renderUser();
            })
                .catch(error => {
                    
                })
            
    }

    calcHours() {
        console.log('calc renderer')

        let rate = this.state.hRate;
        let wHours = this.state.hours;
        let tHours = rate * wHours;
        let testti = 5;
        this.setState({
            totalHours: tHours
        })
        console.log(this.state.totalHours)
    }


    addDocket = e => {
        // this.renderUser();
        e.preventDefault();
               
        const ref = refDoc.doc();
        
        ref.set({
            id:ref.id,
            cName: this.state.cName,
            email: this.state.email,
            hRate: this.state.hRate,
            oRate: this.state.oRate,
            activityName: this.state.activityName,
            company: this.state.company,
            ccNumber: this.state.ccNumber,
            site: this.state.site,
            hours: this.state.hours,
            totalHours: this.state.totalHours
        })
        .then(function(){
            console.error('Success');
        })
        .catch(function(error){
            console.error("Error adding document: ", error);  
        });
    }

    render() {
        
        if(this.state.totalHours !== null){
            return (
                <div>
                    <p>This is Confirm Selection</p>
                    {console.log(this.state.oRate)}
                    {/* <button onClick={this.renderDocket}>get info</button> */}
                    <button onClick={this.addDocket}> Add Docket</button>
                    <div>hello {this.state.totalHours}</div>
                    <div></div>
                </div>
            )
        }
        
    }

}

export default Confirm;
