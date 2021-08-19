import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {MostraModalService} from "../../servicios/mostra-modal.service";
import {UsuariosService} from "../../servicios/usuarios.service";
import {UsuarioEdit} from "../../clases/usuario-edit";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  @Input() correo: String;
  private usuario: UsuarioEdit = null;
  datos: FormGroup;
  @Output() termino = new EventEmitter<any>();



  constructor(public mostraModalService: MostraModalService,
              private usuariosService: UsuariosService,private formBuilder: FormBuilder) {
  }

  usuarioInfo = {
    nombre: [
      {type: 'required', message: 'nombre requerido.'},
    ],
    apellidoPaterno: [
      {type: 'required', message: 'apellido paterno requerida.'},
    ],
    apellidoMaterno:[
      {type: 'required', message: 'apellido paterno requerida.'},
    ],
    correo:[
      {type: 'required', message: 'apellido paterno requerida.'},
      { type: 'pattern', message: 'No es un correo valido.' }
    ],
    cedula:[
      {type: 'required', message: 'apellido paterno requerida.'},
      { type: 'pattern', message: 'Solo se admiten numeros.' }
    ],
    telefono:[
      {type: 'required', message: 'apellido paterno requerida.'},
      { type: 'pattern', message: 'Solo se admiten numeros.' }
    ]
  };

  ngOnInit(): void {
    if (this.correo != null) {
      this.usuariosService.getByEmail(this.correo).subscribe({
        complete: () => {

        },
        error: (err) => {

        },
        next: (response) => {
          this.usuario = response.data;
          console.log(this.usuario);
          this.datos = this.ElementosForm(this.usuario);
        }
      })
    } else {
      this.usuario = new UsuarioEdit();
      this.datos = this.ElementosForm(this.usuario);
    }


  }

  cerrarModal() {
    this.mostraModalService.cerrarModal()
  }

  enviaInformacion(){
    if (this.correo==null){
      //post
      this.usuariosService.postUser(this.datos.value).subscribe({
        error: (err) => {
          console.log("usuariosService post error");
          console.log(err);

        },
        next: (response) => {
          console.log("usuariosService post next");
          console.log(response);
          this.mostraModalService.cerrarModal();
          this.termino.emit();

        }
      })
    }else{
      this.usuariosService.putUser(this.datos.value,this.correo).subscribe({
        error: (err) => {
          console.log("usuariosService put error");
          console.log(err);

        },
        next: (response) => {
          console.log("usuariosService put next");
          console.log(response);
          this.mostraModalService.cerrarModal();
          this.termino.emit();
        }
      })

      //put
    }
  }

  private ElementosForm(usuarioEdit:UsuarioEdit) {
    return this.formBuilder.group({
      nombre: [usuarioEdit.nombre, Validators.compose([
        Validators.required,
      ])],
      apellidoPaterno: [usuarioEdit.apellidoPaterno, Validators.compose([
        Validators.required,
      ])],
      apellidoMaterno: [usuarioEdit.apellidoMaterno, Validators.compose([
        Validators.required,
      ])],
      correo: [usuarioEdit.correo, Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')
      ])],
      cedula: [usuarioEdit.cedula, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')

      ])],
      telefono: [usuarioEdit.telefono, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ])]
    })
  }

}
