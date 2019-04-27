import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
	loginError: string;
	public username: string = 'luli.varela25@gmail.com';
  public password: string = '123456';	

	constructor(
    private router: Router,
		private auth: AuthService,
	) {
	}

	login() {

		let credentials = {
			email: this.username,
			password: this.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => {
          this.router.navigateByUrl('home')
        },
				error => alert(error.message)
			);
	}
}
