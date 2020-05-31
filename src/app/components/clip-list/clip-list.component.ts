import { Component, OnInit } from '@angular/core';
import { ClipService } from '../../services/clip.service';

@Component({
  selector: 'app-clip-list',
  templateUrl: './clip-list.component.html',
  styleUrls: ['./clip-list.component.scss']
})
export class ClipListComponent implements OnInit {
  active: string

  constructor(private clipService:ClipService) { }

  ngOnInit(): void {
  
  }

  selectItem(i: string) {
    console.log(`selected ${i}`)
    this.active = i;
    this.clipService.setActiveClip(i)
  }

  filterClips() {
    if (this.clipService.allClips) {
      return this.clipService.allClips.filter(clip => {
        return clip.name == this.clipService.getActive()
      })
    } else {
      return "x"
    }
  }

  clipsReady() {
    if (this.clipService.activeJoker) {
      return true
    } else {
      return false
    }
  }
}

