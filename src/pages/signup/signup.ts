import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');

  }


  createAccount(){
    let loaders = this.loading.create({
      content: 'Processing..',
      duration: 3000
    })

    loaders.present();
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res=>{
   this.id = res.user.uid;
   this.navCtrl.setRoot(ProfilePage, this.id)
    })
    //this.navCtrl.push(ProfilePage)

    .catch(function(error) {
     return error;
    });

  //
  }
}
