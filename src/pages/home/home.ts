import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase'
import { snapshotToArray } from '../../app/environment';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users;
  userID = firebase.auth().currentUser.uid;
  ref =  firebase.database().ref('users/'  + this.userID);
  constructor(public navCtrl: NavController) {
  //console.log(firebase.auth().currentUser.email);
  this.ref.on('value', resp => {
    this.users = snapshotToArray(resp);
    console.log(this.users);

    })

  }

  logout(){
    firebase.auth().signOut().then(() => {
      console.log('logged Out');
       this.navCtrl.setRoot(SigninPage);
    }).catch(function(error) {
      // An error happened.
    });

  }
}
