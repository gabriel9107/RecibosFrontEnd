import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';

const rutas: Routes = [
  {
    path:'', 
    component:HomeComponent, 
    children: [
      { 
        path:'listado', 
        component:ListadoComponent

      }, 
      {
        path:'agregar', 
        component:AgregarComponent
      }, 
      {
        path:'editar/:id', 
        component:AgregarComponent
      }, 
      {
        path:'buscar', 
        component:BuscarComponent
      } , 
      {
        path:':id', 
        component: 
        MiembrosComponent
      }, 
      {
        path: '**', 
        redirectTo:'listado'
      }
  

    
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild(rutas)
  ], exports: [RouterModule]
})
export class MiembrosRoutingModule { }
