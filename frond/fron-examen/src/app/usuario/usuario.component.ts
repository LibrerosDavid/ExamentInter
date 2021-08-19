import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../servicios/usuarios.service";
import {UsuarioDTO} from "../interfaces/usuario-dto";
import {MostraModalService} from "../servicios/mostra-modal.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  clientes:UsuarioDTO[] = [];
  crearUsuario:Boolean = false;
  clienteSeleccionado:String = null;
  pagina=0;

  constructor(private usuariosService:UsuariosService,
              public mostraModalService:MostraModalService) { }

  ngOnInit(): void {
    this.getAlluser(this.pagina,false);
  }

  anterior(){
    if (this.pagina>0){
      this.pagina--;
      this.getAlluser(this.pagina,false);
    }
  }

  siguiente(){
    this.pagina++;
    this.getAlluser(this.pagina,false);
  }

  getAlluser(pagina:number,recarga:boolean){
    if (recarga){
      this.pagina = 0;
    }
    this.usuariosService.getAllUsuario(pagina,10).subscribe({
      complete: ()=>{

      },
      error:(err) => {
        console.log(err)
      },
      next: (response)=>{
        console.log(response);

        console.log(response.data.content);
        this.clientes = response.data.content;
      }
    });
  }

  mostrarModal(){
    this.clienteSeleccionado = null;
    this.mostraModalService.abrirModal();
  }

  EditarUsuario(correo:String){
    this.clienteSeleccionado = correo;
    this.mostraModalService.abrirModal();
  }

}
