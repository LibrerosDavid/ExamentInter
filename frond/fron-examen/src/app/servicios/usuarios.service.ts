import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import {datos, Response, userEdit} from "../interfaces/response";
import {UsuarioEdit} from "../clases/usuario-edit";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = environment.dirServidor+"/usuario/";
  constructor(private http: HttpClient) { }

  public getAllUsuario(page:number,size:number): Observable<datos>{
    const params = new HttpParams()
      .set('page', String(page))
      .set('size', String(size));
    return this.http.get<datos>(this.URL+"todos",{params});
  }

  public getByEmail(email:String): Observable<userEdit>{
    return this.http.get<userEdit>(this.URL+"email/"+email);
  }

  public postUser(usuarioEdit:UsuarioEdit): Observable<userEdit>{
    return this.http.post<userEdit>(this.URL+"agrega/",usuarioEdit);
  }

  public putUser(usuarioEdit:UsuarioEdit,email:String): Observable<userEdit>{
    return this.http.put<userEdit>(this.URL+"actualiza/"+email,usuarioEdit);
  }
}
