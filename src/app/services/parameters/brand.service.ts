import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url: string = GeneralData.BUSSINESS_URL;
  token: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<BrandModel[]> {
    return this.http.get<BrandModel[]>(`${this.url}/brands`);
  }

  SaveRecord(data: BrandModel): Observable<BrandModel> {
    return this.http.post<BrandModel>(
      `${this.url}/brands`,
      {
        name: data.name
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  SearchRecord(id: number): Observable<BrandModel>{
    return this.http.get<BrandModel>(`${this.url}/brands/${id}`);
  }

  EditRecord(data: BrandModel): Observable<BrandModel> {
    return this.http.put<BrandModel>(
      `${this.url}/brands/${data.id}`,
      {
        id: data.id,
        name: data.name
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

}
