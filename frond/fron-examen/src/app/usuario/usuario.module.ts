import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  declarations: [UsuarioComponent, UsuarioCrearComponent, PaginatorComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UsuarioModule { }
