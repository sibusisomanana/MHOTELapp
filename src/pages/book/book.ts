import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import arry from '../view-room/view-room';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.price = this.d[0].price;
    //this.room = this.d[0].room;

  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad BookPage');



  }
dateV(){

  let date = new Date(this.date_in).valueOf();
  let dt = new Date(this.date_out).valueOf();
  this.ouput =  this.people * this.rooms * Number(dt - date);
  let today = new Date().valueOf();
  if(today > date || dt < date){
    this.alertCtrl.create({
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
