import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { user } from '../profile/model/user';

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
  createProfile(user){
      // A post entry.
      let postData = {
        Bio: user.bio,
        Cellphone: user.cellno,
        Fullname: user.fullname,
        UID: firebase.auth().currentUser.uid
      };

      // Get a key for a new Post.
      // let newPostKey = firebase.database().ref().child('users').push().key;

      // // Write the new post's data simultaneously in the posts list and the user's post list.
      // let updates = {};
      // updates['/users/' + newPostKey] = postData;

      // return firebase.database().ref().update(updates);
    }


}
