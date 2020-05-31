import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './components/pages/manage/manage.component'
import { EditComponent } from './components/pages/edit/edit.component'
import { ReviewComponent } from './components/pages/review/review.component'
import { AboutComponent } from './components/pages/about/about.component'


const routes: Routes = [
  { path: '', component: ManageComponent },
  { path: 'edit', component: EditComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
