import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email;
  password;
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');
  }


  createAccount(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res=>{
   this.id = res.user.uid;
    this.navCtrl.push(ProfilePage, this.id);
    })
    //this.navCtrl.push(ProfilePage)


    .catch(function(error) {
     return error;
    });

  }
}
