import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';


/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  email;
  password;
  splash = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

    setTimeout(() =>{
      this.splash = false;

    }, 4000);
  }
  Login(){
    let loaders = this.loading.create({
      content: 'Please wait..',
      duration: 3000});
      loaders.present();
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then( res =>{
      console.log(res);
      this.navCtrl.setRoot(HomePage);
    })

    .catch(function(error) {

      const alert = this.alertCtrl.create({
        title: error.code,
        subTitle: error.message,
        buttons: ['OK']
      });
      alert.present();
      // Handle Errors here.
     // var errorCode = error.code;
    //  var errorMessage = error.message;
//console.log(errorCode + errorMessage);


    });


  }
  register(){
    this.navCtrl.push(SignupPage);
  }

}
