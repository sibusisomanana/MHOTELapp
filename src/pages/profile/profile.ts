import { user } from './model/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SigninPage } from '../signin/signin';
import { HomePage } from '../home/home';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userID;
  ref;
  user = {} as user;
  myphoto;
  prof;
  storageRef = firebase.storage().ref();

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public loading: LoadingController, public alertCtrl: AlertController) {
    this.userID = this.navParams.data;
    this.ref =  firebase.database().ref('users/');
    this.ref.on('value', resp => {
      this.prof = snapshotToArray(resp);
      console.log(this.prof);

      })

  }

  ionViewDidLoad() {
    //console.log();
  }
  upload() {
    let loaders = this.loading.create({
      content: 'Uploading...',
      duration: 3000
    })

    loaders.present();
   // let storageRef = firebase.storage().ref();
    const filename = Math.floor(Date.now() / 1000);
    const imageRef = this.storageRef.child(`user-profile/${filename}.jpg`);

    imageRef.putString(this.myphoto, firebase.storage.StringFormat.DATA_URL)
    .then((snapshot) => {
      console.log('image uploaded');
      this.myphoto = snapshot.downloadURL

     // loaders.present();
    })
  }

  takePhoto(sourcetype: number){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourcetype,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.myphoto = base64Image;
    }, (err) => {
     // Handle error
    });
  }
  createProfile(user : user){
    this.upload()
    let alert = this.alertCtrl.create({
      title: 'Creating profile..',
      subTitle: 'Done!',
      buttons: ['Ok']
    })

    if(this.myphoto != '') {
      let newUser = this.ref.push();
    newUser.set({
      Fullname: user.fullname,
      Cellphone: user.cellno,
      Bio: user.bio,
      UID: firebase.auth().currentUser.uid,
      Profile_pic: this.myphoto
    });
     this.user.fullname = null;
     this.user.cellno = '';
     this.user.bio = '';
    alert.present();
    this.navCtrl.setRoot(HomePage);
    }else {
     let alert = this.alertCtrl.create({
       title: 'Warning!',
       subTitle: 'You must upload image first',
       buttons: ['Ok']
     })
     alert.present();
     this.navCtrl.setRoot(ProfilePage);
    }
  }
}
