import { UserProfilePage } from './../user-profile/user-profile';
import { ViewRoomPage } from './../view-room/view-room';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SigninPage } from '../signin/signin';
import { snapshotToArray } from '../../app/environment';
import { ProfilePage } from '../profile/profile';

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
  homeRoot = HomePage;
accountRoot = "AccountPage";

  rooms;
  userID = firebase.auth().currentUser.uid;
  ref =  firebase.database().ref('rooms/');
  ref2 =  firebase.database().ref();
  user;
  splash = true;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public loading: LoadingController) {
  //console.log(firebase.auth().currentUser.email);

  this.ref.on('value', resp => {
    this.rooms = snapshotToArray(resp);
   // console.log(this.rooms);

    })
   this.loading.create({
      content: 'Loading..',
      duration: 3000
    }).present();

  this.ref2.child('users').orderByChild('UID').equalTo(this.userID).on('value', resp => {
    //console.log(resp.val());

    if(resp.exists()) {
       this.user = snapshotToArray(resp);
       console.log(this.user);

    } else {
      this.navCtrl.push(ProfilePage);
    }
   })
  }
  ionViewDidLoad() {

    setTimeout(() =>{
      this.splash = false;

    }, 4000);
  }
  viewRoom(event, key)
  {
    this.navCtrl.push(ViewRoomPage, key )
  }

  profile(){
    this.navCtrl.push(UserProfilePage);
  }
}
