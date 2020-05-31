import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClipService {

  clipsURL:string = 'http://localhost:3000'

  activeJoker:any
  activeClip:any
  allClips:any

  constructor(private http:HttpClient) { }

  getClips():Observable<any> {
    return this.http.get<any>(this.clipsURL)
  }

  getActive() {
    return this.activeJoker
  }

  setActive(a) {
    this.activeJoker = a
    console.log(`the service logged ${a} as the active joker`)
  }

  setActiveClip(path) {
    this.activeClip = path
  }
  getActiveClip() {
    return this.activeClip
  }
}
