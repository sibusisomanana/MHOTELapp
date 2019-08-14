import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';


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
  loginForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, public alertCtrl: AlertController, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
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
