import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//this is alert-emit interface
import { Alert } from '../../components/alert/alert';

@Injectable()
export class AlertService {
  alertSettings = new Subject<Alert>()
  constructor() { }
  create(body: string) {
    this.alertSettings.next({
      body
    });
  }
}