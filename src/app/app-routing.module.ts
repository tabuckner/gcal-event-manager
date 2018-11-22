import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewEventComponent } from './new-event/pages/new-event/new-event.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event/new', component: NewEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
