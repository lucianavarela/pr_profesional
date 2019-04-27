import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './pages/login/login.page';
import { AuthService } from './services/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as firebase from 'firebase/app';

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
    private service: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(5000).subscribe(() => {
        this.showSplash = false;
      });

      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
          
        });

    });
  }
}
