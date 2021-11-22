import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = GeneralData.BUSSINESS_URL;
  token: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.url}/categories`);
  }

  SaveRecord(data: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(
      `${this.url}/categories`,
      {
        name: data.name
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  SearchRecord(id: number): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`${this.url}/categories/${id}`);
  }

  EditRecord(data: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(
      `${this.url}/categories/${data.id}`,
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

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(
      `${this.url}/categories/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

}