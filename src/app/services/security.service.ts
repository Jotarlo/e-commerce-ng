import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general-data';
import { UserCredentialsModel } from '../models/user-credencials.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url: string = GeneralData.ADMIN_USERS_URL;

  constructor(
    private http: HttpClient
  ) { }

  Login(modelo: UserCredentialsModel): Observable<any> {
    return this.http.post(`${this.url}/identificar-usuario`, {
      usuario: modelo.username,
      clave: modelo.password
    });
  }

}
