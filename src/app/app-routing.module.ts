import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';


// en el array routes incluir el objeto como esta definido a continuacion
const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
  path: 'login',
  component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

