import { Component, OnInit, NgZone } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  modalStatus: boolean;
  body: string;
  color: string;
  backColor: string;

  constructor(
    private alertService: AlertService,
    private _ngZone: NgZone,
    private vibration: Vibration
  ) { }
  
  ngOnInit() {
    this.alertService.alertSettings.subscribe(
      (data) => {
        this.body = data.body;
        this.modalStatus = true;
        this.vibration.vibrate([500,1000]);
      }
    );
  }
  //close alert afert click on ok and cross
  resolve() {
    this.modalStatus = false;
  }
}