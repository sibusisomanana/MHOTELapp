import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  date_in;
  date_out;
  people: number;
  rooms: number;
  ouput : any;
  d = arry ;
  room ;
  price ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.price = this.d[0].price;
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad BookPage');


  }


  gotoPay(){

    var datein = new Date(this.date_in).getDate();
    var dateout = new Date(this.date_out).getDate();
    this.ouput = this.price * this.people * this.rooms * Number(dateout - datein);
    console.log(this.ouput);


    let obj1 ={
      room: this.d[0].room ,
      price: this.ouput

    }

    arr.push(obj1);
    console.log(arr);

    this.navCtrl.push(PaymentPage);
  }

  }


var arr = new Array()

export default arr ;
