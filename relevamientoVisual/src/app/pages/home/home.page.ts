import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public password: string;

  constructor(public service: AuthService, private router: Router) {
    if (!this.service.isLogged()) {
      this.router.navigateByUrl('/login');
    }
  }


}
