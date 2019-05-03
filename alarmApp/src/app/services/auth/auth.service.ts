import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertService } from '../alert/alert.service';

@Injectable()
export class AuthService {
	private user: firebase.User = null;

	constructor(public afAuth: AngularFireAuth, public alertService: AlertService) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	isLogged() {
		return this.afAuth.auth.currentUser != null;
	}

	getCurrentUserId() {
		return this.afAuth.auth.currentUser ? this.afAuth.auth.currentUser.uid : null;
	}

	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			credentials.password)
			.then(
				(user) => {
					this.user = user.user;
				},
				error => {
					this.alertService.create(error.message);
				})
			.catch(
				e => this.alertService.create(e)
			)
	}
}
