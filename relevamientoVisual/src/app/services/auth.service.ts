import { Injectable } from "@angular/core";
import 'rxjs'
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
    return this.user != null;
  }

	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

}
