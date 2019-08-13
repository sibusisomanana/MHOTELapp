import { ProfilePage } from './../profile/profile';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { SigninPage } from '../signin/signin';
import { UpdateProfilePage } from '../update-profile/update-profile';

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
  user;
  userID = firebase.auth().currentUser.uid;
   ref =  firebase.database().ref();
   constructor(public navCtrl: NavController, private alert: AlertController, public modalCtrl: ModalController) {
   //console.log(firebase.auth().currentUser.email);
   this.ref.child('bookings').orderByChild('UID').equalTo(this.userID).on('value', resp => {
     console.log(resp.val());

     if(resp.exists()) {
        this.profile = snapshotToArray(resp);
     }

    //  else {
    //     this.alert.create({
    //       title: 'empty',
    //       subTitle: 'Please create a profile first',
    //       buttons: ['ok']
    //     }).present()

    //  }
    })

    this.ref.child('users').orderByChild('UID').equalTo(this.userID).on('value', resp => {
      console.log(resp.val());

      if(resp.exists()) {
         this.user = snapshotToArray(resp);
      }else {
      this.navCtrl.setRoot(ProfilePage);
      }
     })

   }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad UserProfilePage');
  }
  home(){
    this.navCtrl.setRoot(HomePage);
  }
  logout(){
    firebase.auth().signOut().then(() => {
      console.log('logged Out');
       this.navCtrl.setRoot(SigninPage);
    }).catch((error) => {
      // An error happened.
     let errorCode = error.code;
      let errorMessage = error.message;
      this.alert.create({
        title: errorCode,
        subTitle: errorMessage,
        buttons: ['Try again']
      }).present()

    });

  }
  updateProfile(){
    const modal = this.modalCtrl.create(UpdateProfilePage);
    modal.present();
  }
}
