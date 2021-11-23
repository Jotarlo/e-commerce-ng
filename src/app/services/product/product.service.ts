import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ProductModel } from 'src/app/models/product/product.model';
import { UploadedFileModel } from 'src/app/models/product/uploaded.file.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = GeneralData.BUSSINESS_URL;
  token: string = "";
  filter: string = `?filter={"include":[{"relation":"brand"}, {"relation":"categories"}]}`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.url}/products${this.filter}`);
  }

  SaveRecord(data: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(
      `${this.url}/products`,
      {
        name: data.name,
        main_image: data.main_image,
        discount: data.discount,
        price: data.price,
        stock: data.stock,
        stars: data.stars,
        brandId: data.brandId
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  SearchRecord(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.url}/products/${id}`);
  }

  EditRecord(data: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(
      `${this.url}/products/${data.id}`,
      {
        id: data.id,
        name: data.name,
        main_image: data.main_image,
        discount: data.discount,
        price: data.price,
        stock: data.stock,
        stars: data.stars,
        brandId: data.brandId
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(
      `${this.url}/products/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  UploadFile(formData: FormData): Observable<UploadedFileModel>{
    return this.http.post<UploadedFileModel>(
      `${this.url}/CargarImagenPrincipalProducto`,
      formData,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

}