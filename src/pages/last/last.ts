import { ProfilePage } from './../profile/profile';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import arry from '../view-room/view-room';
import arr from '../book/book';

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
  // userID = firebase.auth().currentUser.uid;
   ref =  firebase.database().ref('bookings/');
   constructor(public navCtrl: NavController) {
   //console.log(firebase.auth().currentUser.email);
    this.r_name = this.d[0].room;
    this.price = this.e[0].price;
   }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LastPage');
  }
  goHome(){
  this.navCtrl.setRoot(HomePage);
  }
  goBookings(){
  this.navCtrl.setRoot(ProfilePage);
  }

}
