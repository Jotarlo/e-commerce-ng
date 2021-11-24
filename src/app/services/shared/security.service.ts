import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SessionData } from 'src/app/models/session-data.model';
import { GeneralData } from '../../config/general-data';
import { UserCredentialsModel } from '../../models/user-credencials.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  sessionDataSubject: BehaviorSubject<SessionData> = new BehaviorSubject<SessionData>(new SessionData());
  url: string = GeneralData.ADMIN_USERS_URL;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.IsThereActiveSession();
   }

  IsThereActiveSession() {
    let data = localStorage.getItem("session-data");
    if (data) {
      let objectData: SessionData = JSON.parse(data);
      objectData.isLoggedIn = true;
      this.RefreshSessionData(objectData);
    }
  }

  RefreshSessionData(data: SessionData){
    this.sessionDataSubject.next(data);
  }

  GetSessionStatus(){
    return this.sessionDataSubject.asObservable();
  }

  Login(modelo: UserCredentialsModel): Observable<SessionData> {
    return this.http.post<SessionData>(`${this.url}/identificar-usuario`, {
      usuario: modelo.username,
      clave: modelo.password
    });
  }

  VerificarToken(): Observable<boolean> {
    let tk = this.localStorageService.GetToken();
    if(tk == ""){
      return of(false);
    }
    return this.http.post<boolean>(`${this.url}/token-validator`, {
      token: tk
    });
  }



}
