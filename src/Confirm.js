import React from 'react';
import { Link } from '@reach/router';
import 'firebase/firestore';
import firebase from "./firestore";

class Confirm extends React.Component {

    constructor() {
        super()
        this.state = {
            cName: '',
            email: '',
            hRate: '',
            oRate: '',
            activityName: 'Dirt removal',
            company: 'cndd',
            ccNumber: '6545',
            site: 'High Street',
            hours: '',
            totalHours: ''
        }
        this.renderUser = this.renderUser.bind(this);
        this.renderDocket = this.renderDocket.bind(this);
        this.calcHours = this.calcHours.bind(this)
        this.addDocket = this.addDocket.bind(this);
        this.submitAll = this.submitAll.bind(this);
    }

/*     componentWillMount() {
        this.renderUser();
        this.renderDocket();

    }
    componentDidMount() {
        // this.calcHours();

    } */

    renderUser = e => {
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
    }

    renderDocket = e => {
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
        // e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection('test').add({
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
        });
    }

    submitAll() {
        this.renderUser();
        this.renderDocket();
        this.calcHours();
        this.addDocket();
    }



    render() {
        return (
            <div>
                <p>This is Confirm Selection</p>
                {/* {console.log(this.state.oRate)} */}

                <button onClick={this.submitAll}>total hours are</button>
                <div>hello {this.state.totalHours}</div>
            </div>
        )
    }

}

export default Confirm;
