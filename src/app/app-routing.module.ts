import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { JoinusComponent } from './pages/joinus/joinus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SuccesInfoComponent } from './succes-info/succes-info.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path: 'home'
  },
  {
    component:AboutComponent,
    path: 'about'
  },
  {
    component:ServicesComponent,
    path: 'services'
  },
  {
    component:JoinusComponent,
    path: 'joinus'
  },
  {
    component:ContactComponent,
    path: 'contact'
  }, {
    component:SuccesInfoComponent,
    path: 'success'
  },
  {
    redirectTo:'home',
    path: '',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
