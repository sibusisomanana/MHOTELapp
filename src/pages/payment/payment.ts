import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import arr from '../book/book';
import * as firebase from 'firebase';
import { LastPage } from '../last/last';
import { snapshotToArray } from '../../app/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  d = arr ;
  room ;
  price ;
  holder;
  cardno;
  cvv;
  userID = firebase.auth().currentUser.uid ;
  ref = firebase.database().ref('bookings/');
  ref2 = firebase.database().ref();
  fullname;
  cellphone;
  pic;
  in;
  out;
  date;
  exp_date;
  payForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loading: LoadingController,  public formBuilder: FormBuilder) {
    this.payForm = formBuilder.group({
      cardnumber: ['', Validators.compose([Validators.required, Validators.maxLength(16)])],
      cvv: ['', Validators.compose([Validators.maxLength(3), Validators.required])],
      holder: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      expdate: ['']
    });
    console.log(this.d);
    this.room = this.d[0].room;
    this.price = this.d[0].price;
    this.in = this.d[0].in;
    this.out = this.d[0].out;
    this.date = Date();

    this.ref2.child('users').orderByChild('UID').equalTo(this.userID).on('value', resp=>{
      if(resp.exists()){
        this.fullname = snapshotToArray(resp)[0].Fullname;
        this.cellphone =snapshotToArray(resp)[0].Cellphone;
        this.pic = snapshotToArray(resp)[0].Profile_pic;
      }
    })
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad PaymentPage');


  }
  submit(){
    let loaders = this.loading.create({
      content: 'Processing..',
      duration: 3000
    })

    loaders.present();

    let newUser = this.ref.push();
    newUser.set({
      Holder: this.holder,
      Room: this.room,
      Price: this.price,
      Card_number : this.cardno,
      CVV : this.cvv,
      Fullname : this.fullname,
      Cellphone : this.cellphone,
      Pic : this.pic,
      UID : firebase.auth().currentUser.uid,
      Check_in : this.in,
      Check_out : this.out,
      Created_date: this.date,
      Expiry_date: this.exp_date
    });
     this.price = '';
     this.room = '';
     this.price = '';
     this.cardno = '';
     this.cvv = '';
     this.exp_date = '';
   // alert.present();
    this.navCtrl.push(LastPage, this.fullname);
  }

}
