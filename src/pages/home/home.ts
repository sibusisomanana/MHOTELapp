import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SigninPage } from '../signin/signin';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
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
