import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const rutas:Routes = [
  {
    path:'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'miembros', 
    loadChildren:() => import('./miembros/miembros.module').then(m => m.MiembrosModule)
  },
  {
    path:'404',
  component:ErrorPageComponent 
  }, 
  {
    path:'**', 
    redirectTo:'404'
  }
]


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(rutas)
  ], exports:[RouterModule]

})
export class AppRoutingModule { }
