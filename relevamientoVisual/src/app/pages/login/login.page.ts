import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'page-login',
	templateUrl: 'login.page.html',
	styleUrls: ['login.page.scss'],
})
export class LoginPage {
	loginError: string;
	public username: string = '';
	public password: string = '';

	constructor(
		private alertService: AlertService, private router: Router, private auth: AuthService,
		public actionSheetController: ActionSheetController
	) { }

	login() {
		if (this.username != '' && this.password != '') {
			let credentials = {
				email: this.username,
				password: this.password
			};
			this.auth.signInWithEmail(credentials)
				.then(
					() => {
						this.router.navigateByUrl('home')
					},
					error => {
						this.alertService.create(error.message);
					}
				)
				.catch(
					e => this.alertService.create(e)
				)
		} else {
			this.alertService.create('Debe ingresar el usuario y contraseña');
		}
	}

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Elige un perfil',
			buttons: [{
				text: 'Admin',
				role: 'destructive',
				handler: () => {
					this.loadUser(1);
				}
			}, {
				text: 'Invitado',
				handler: () => {
					this.loadUser(2);
				}
			}, {
				text: 'Usuario',
				handler: () => {
					this.loadUser(3);
				}
			}, {
				text: 'Anonimo',
				handler: () => {
					this.loadUser(4);
				}
			}, {
				text: 'Tester',
				handler: () => {
					this.loadUser(5);
				}
			}, {
				text: 'Cancel',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		await actionSheet.present();
	}

	loadUser(user: number) {
		switch (user) {
			case 1:
				this.username = 'admin@gmail.com';
				this.password = '11111111';
				break;
			case 2:
				this.username = 'invitado@gmail.com';
				this.password = '22222222';
				break;
			case 3:
				this.username = 'usuario@gmail.com';
				this.password = '33333333';
				break;
			case 4:
				this.username = 'anonimo@gmail.com';
				this.password = '44444444';
				break;
			case 5:
				this.username = 'tester@gmail.com';
				this.password = '55555555';
				break;
		}
	}
}
