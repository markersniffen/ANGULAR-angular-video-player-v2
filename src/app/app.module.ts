import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokerListComponent } from './components/joker-list/joker-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ClipListComponent } from './components/clip-list/clip-list.component';
import { ClipPlayerComponent } from './components/clip-player/clip-player.component';
import { ReviewComponent } from './components/pages/review/review.component';
import { EditComponent } from './components/pages/edit/edit.component';
import { ManageComponent } from './components/pages/manage/manage.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    JokerListComponent,
    ListItemComponent,
    ClipListComponent,
    ClipPlayerComponent,
    ReviewComponent,
    EditComponent,
    ManageComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
