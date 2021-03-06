import { HomePage } from './../home/home';
import { BookPage } from './../book/book';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the ViewRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-room',
  templateUrl: 'view-room.html',
})
export class ViewRoomPage {

//bookRoom = [];
  ref = firebase.database().ref('rooms/');
  key;
  rooms;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.key = this.navParams.data;
 this.ref.orderByKey().equalTo(this.key).on('value', resp => {
   this.rooms = snapshotToArray(resp);
     console.log(this.rooms);
   })
}

  ionViewDidLoad() {
  //  console.log('ionViewDidLoad ViewRoomPage');
  }

  book(key){
  //  console.log(key);

   this.navCtrl.push(BookPage, key);
  }
  back(){
    this.navCtrl.push(HomePage);
  }
}
var arry = new Array()

export default arry ;
