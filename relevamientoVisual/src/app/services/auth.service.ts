import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
	private user: firebase.User = null;

	constructor(public afAuth: AngularFireAuth) {
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
			.then(user => {
				this.user = user.user;
			})
	}
}
