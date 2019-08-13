import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the UpdateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {

  user;
  userID = firebase.auth().currentUser.uid;
   ref =  firebase.database().ref();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.child('users').orderByChild('UID').equalTo(this.userID).on('value', resp => {
      console.log(resp.val());

      if(resp.exists()) {
         this.user = snapshotToArray(resp);
      }

     })

  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad UpdateProfilePage');
  }

}
