import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './pages/login/login.page';
import { AuthService } from './services/auth/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { AudioService } from './services/audio/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSlash = true;
  showSplash: Boolean = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private nativeAudio: NativeAudio,
    private audioService: AudioService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.nativeAudio.preloadSimple('start', 'assets/startup.mp3').then(
          () => {
            timer(3000).subscribe( () => {
              this.nativeAudio.play('start').then(
                () => {
                  this.showSplash = false;
                  this.loadFiles();
                });
              }
            );
          }
        );
      } else {
        this.showSplash = false;
      }
      
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        
      });
      
    });
  }
  
  loadFiles() {
    let languages = ['espanol', 'ingles', 'frances'];
    languages.forEach((lan) => {
      this.audioService.preload(lan+'-uno', 'assets/sonidos/'+lan+'/uno.mp3');
      this.audioService.preload(lan+'-dos', 'assets/sonidos/'+lan+'/dos.mp3');
      this.audioService.preload(lan+'-tres', 'assets/sonidos/'+lan+'/tres.mp3');
      this.audioService.preload(lan+'-cuatro', 'assets/sonidos/'+lan+'/cuatro.mp3');
      this.audioService.preload(lan+'-cinco', 'assets/sonidos/'+lan+'/cinco.mp3');
      this.audioService.preload(lan+'-mariposa', 'assets/sonidos/'+lan+'/mariposa.mp3');
      this.audioService.preload(lan+'-conejo', 'assets/sonidos/'+lan+'/conejo.mp3');
      this.audioService.preload(lan+'-gato', 'assets/sonidos/'+lan+'/gato.mp3');
      this.audioService.preload(lan+'-perro', 'assets/sonidos/'+lan+'/perro.mp3');
      this.audioService.preload(lan+'-vaca', 'assets/sonidos/'+lan+'/vaca.mp3');
      this.audioService.preload(lan+'-verde', 'assets/sonidos/'+lan+'/verde.mp3');
      this.audioService.preload(lan+'-azul', 'assets/sonidos/'+lan+'/azul.mp3');
      this.audioService.preload(lan+'-amarillo', 'assets/sonidos/'+lan+'/amarillo.mp3');
      this.audioService.preload(lan+'-rojo', 'assets/sonidos/'+lan+'/rojo.mp3');
      this.audioService.preload(lan+'-naranja', 'assets/sonidos/'+lan+'/naranja.mp3');
    })
  }
}
