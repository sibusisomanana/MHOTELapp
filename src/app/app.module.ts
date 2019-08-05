import { UserProfilePage } from './../pages/user-profile/user-profile';
import { LastPage } from './../pages/last/last';
import { PaymentPage } from './../pages/payment/payment';
import { BookPage } from './../pages/book/book';
import { ViewRoomPage } from './../pages/view-room/view-room';
import { ProfilePage } from './../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ProfilePage,
    SigninPage,
    ViewRoomPage,
    BookPage,
    PaymentPage,
    LastPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ProfilePage,
    SigninPage,
    ViewRoomPage,
    BookPage,
    PaymentPage,
    LastPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
