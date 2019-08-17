import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from './components/to-dos/to-dos.component'; 
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  { path: '', component: ToDosComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
