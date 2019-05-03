import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../config';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './pages/login/login.module';
import { AnimalesPageModule } from './pages/animales/animales.module';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FirebaseService } from './services/firebase/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertModule } from './components/alert/alert.module';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ColoresPageModule } from './pages/colores/colores.module';
import { NumerosPageModule } from './pages/numeros/numeros.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ImgBoxModule } from './components/img-box/img-box.module';
import { AudioService } from './services/audio/audio.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LoginPageModule,
    AnimalesPageModule,
    ColoresPageModule,
    NumerosPageModule,
    AlertModule,
    ImgBoxModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    AuthService,
    AngularFireAuth,
    AngularFireDatabase,
    Camera,
    File,
    NativeAudio,
    Vibration,
    ScreenOrientation,
    AudioService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
