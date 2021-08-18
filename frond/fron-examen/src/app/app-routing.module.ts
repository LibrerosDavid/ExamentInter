import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario-routing.module').then( m => m.UsuarioRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
