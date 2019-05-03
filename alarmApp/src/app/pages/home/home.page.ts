import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  public progress: boolean = false;

  constructor(private router: Router, private alertSerive: AlertService,
    private fservice: FirebaseService, private orientation: ScreenOrientation) {
    //this.router.navigateByUrl('/lista');
  }

  ngAfterViewInit() {
    //this.observeScreenOrientation();
    this.orientation.onChange()
      .subscribe(() => {
        console.log(this.orientation.type);
      })
  }
  
  observeScreenOrientation() {
  }

}
