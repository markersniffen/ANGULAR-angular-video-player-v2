import { Component, OnInit } from '@angular/core';
import { ClipService } from '../../services/clip.service';

@Component({
  selector: 'app-clip-player',
  templateUrl: './clip-player.component.html',
  styleUrls: ['./clip-player.component.scss']
})
export class ClipPlayerComponent implements OnInit {

  myPath:string = 'http://localhost:3000/stream?id=e:\\v2.mp4'

  constructor(public clipService:ClipService) { }

  ngOnInit(): void {
  }

}
