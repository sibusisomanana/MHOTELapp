import { UserProfilePage } from './../user-profile/user-profile';
import { ViewRoomPage } from './../view-room/view-room';
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


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rooms;
 // userID = firebase.auth().currentUser.uid;
  ref =  firebase.database().ref('rooms/');
  constructor(public navCtrl: NavController) {
  //console.log(firebase.auth().currentUser.email);
  this.ref.on('value', resp => {
    this.rooms = snapshotToArray(resp);
    console.log(this.rooms);

    })

  }

  viewRoom(event, key)
  {
    this.navCtrl.push(ViewRoomPage, key )
  }
  logout(){
    firebase.auth().signOut().then(() => {
      console.log('logged Out');
       this.navCtrl.setRoot(SigninPage);
    }).catch(function(error) {
      // An error happened.
    });

  }
  profile(){
    this.navCtrl.push(UserProfilePage);
  }
}
