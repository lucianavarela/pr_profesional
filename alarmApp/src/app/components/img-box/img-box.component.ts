import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AudioService } from 'src/app/services/audio/audio.service';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss'],
})
export class ImgBoxComponent implements OnInit {
  @Input() option: any;
  @Input() category: any;

  constructor(public alertService: AlertService, private audioService: AudioService) {
  }

  ngOnInit() {
  }

  playSound(lan: string) {
    let id = lan + '-' + this.option;
    this.audioService.play(id);
  }
}
