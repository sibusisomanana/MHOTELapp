import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import arry from '../view-room/view-room';
import * as firebase from 'firebase';
/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  date_in ;
  date_out;
  people: number;
  rooms: number;
  ouput : any;
  d = arry ;
  room ;
  price ;
  pic;
  adult=0;
  child=0;
  key;
  payForm : FormGroup;
  ref = firebase.database().ref();
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertController, public formBuilder: FormBuilder) {
    this.payForm = formBuilder.group({
      indate : [''],
      outdate: [''],
      kids: [''],
      adult: [''],
      rooms: ['']
    });
    this.price = this.d[0].price;
    this.pic = this.d[0].pic;
    this.room = this.d[0].room;
    //console.log(this.child.toString().length);
    this.key = this.navParams.data;
    this.ref.child('rooms').orderByChild('key').equalTo(this.key).on

  }


  ionViewDidLoad() {
   // console.log('ionViewDidLoad BookPage');



  }
dateV(){

   let date = new Date(this.date_in).getDate();
   let dt = new Date(this.date_out).getDate();

console.log(Number(dt - date));
let checkin = new Date(this.date_in).valueOf();
let checkout = new Date(this.date_out).valueOf();

   this.ouput =  (this.adult * this.price) + (this.child * this.price/2) + this.rooms * Number(dt - date);
   let today = new Date().valueOf();
  if(today > checkin || checkout < checkin){
    this.alert.create({
      title:'Date in error!',
      message:'Please select future!'
    }).present();
  } else {
    let obj1 ={
      room: this.d[0].room ,
      price: this.ouput,
      in: this.date_in,
      out: this.date_out
    }

    arr.push(obj1);
    console.log(arr);

    this.navCtrl.push(PaymentPage);
  }
}

}









var arr = new Array()

export default arr ;
