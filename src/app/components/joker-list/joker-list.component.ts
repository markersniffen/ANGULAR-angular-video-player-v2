import { Component, OnInit, Input } from '@angular/core';
import { ClipService } from '../../services/clip.service';

@Component({
  selector: 'app-joker-list',
  templateUrl: './joker-list.component.html',
  styleUrls: ['./joker-list.component.scss']
})
export class JokerListComponent implements OnInit {

  constructor(private clipService:ClipService) { }

  jokers:any
  active:string

  ngOnInit(): void {
    this.clipService.getClips().subscribe(clips => {
      this.jokers = clips.names
      this.clipService.allClips = clips.files.filter(clips => {
        return clips.path.slice(clips.path.length - 3) == "mp4"
      })
    })
  }

  selectItem(i: string) {
    console.log(`selected ${i}`)
    this.clipService.setActive(this.jokers[i].name)
    this.active = i
  }

}
