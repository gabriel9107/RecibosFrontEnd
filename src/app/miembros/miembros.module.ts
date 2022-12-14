import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { MiembrosRoutingModule } from './miembros-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    MiembrosComponent
  ],
  imports: [
    CommonModule,
    MiembrosRoutingModule, MaterialModule, FlexLayoutModule
  ]
})
export class MiembrosModule { }
