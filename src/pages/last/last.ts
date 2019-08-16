import { ProfilePage } from './../profile/profile';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import arry from '../view-room/view-room';
import arr from '../book/book';
import { UserProfilePage } from '../user-profile/user-profile';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-last',
  templateUrl: 'last.html',
})
export class LastPage {
  bookings;
  d = arry;
  e = arr;
  r_name;
  price;
  person;
  // userID = firebase.auth().currentUser.uid;
   ref =  firebase.database().ref('bookings/');
   constructor(public navCtrl: NavController,public navParams: NavParams,public alertCtrl: AlertController) {
   //console.log(firebase.auth().currentUser.email);
    this.r_name = this.e[0].room;
    this.price = this.e[0].price;
    this.person = this.navParams.data;
   }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LastPage');
  }
  goHome(){
  this.navCtrl.setRoot(HomePage);
  }
  goBookings(){
    this.navCtrl.setRoot(UserProfilePage);
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
