import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  profile;
  userID = firebase.auth().currentUser.uid;
   ref =  firebase.database().ref('bookings/');
   constructor(public navCtrl: NavController) {
   //console.log(firebase.auth().currentUser.email);
   this.ref.orderByKey().on('value', resp => {
    this.profile = resp.val().UID;
      console.log(this.profile);
    })

   }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad UserProfilePage');
  }

}
