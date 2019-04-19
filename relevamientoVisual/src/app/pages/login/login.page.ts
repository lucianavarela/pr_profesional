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
	public username: string;
  public password: string;	

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
          this.router.navigateByUrl('')
        },
				error => alert(error.message)
			);
	}
}
