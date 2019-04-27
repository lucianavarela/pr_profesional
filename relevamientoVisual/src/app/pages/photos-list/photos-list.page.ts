import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Image } from 'src/app/clases/foto';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.page.html',
  styleUrls: ['./photos-list.page.scss'],
})
export class PhotosListPage implements OnInit {
  fotos: any[];
  public usuarios;
  public currentUserId;

  constructor(
    private router: Router,
    private authService: AuthService,
    public sfirebase: FirebaseService) {
    this.sfirebase.GetAllImages().subscribe(images => {
      this.fotos = images;
    });
    this.currentUserId = this.authService.getCurrentUserId();
  }

  ngOnInit() {
  }

}
