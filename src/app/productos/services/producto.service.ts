import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Productos, ProductoResponse } from '../interface/producto.interface';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl:string = environment.baseUrl;
  private _productos!: Productos;

  get productos(){
    return {...this._productos}
  }
 
  constructor(private http: HttpClient) { }

  agregarProductos(name: string, description: string, precio: number){
    const url = `${this.baseUrl}/auth/nuevo_producto`;
    const body = {name,description,precio};
    return this.http.post<ProductoResponse>(url,body)
      .pipe(
        tap(resp => {
          if(resp.ok){
            this._productos = {
              id: resp.id,
              name: resp.name,
              description: resp.description,
              precio: resp.precio,
              
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )

  }

  // listarProductos(): Observable<string>{
  //   const url = `${this.baseUrl}/auth/productos`;
  //   return this.http.get<Productos>(url)
  //     .pipe(
  //       tap(resp => {
  //        console.log (resp)
  //       }),
  //       map( resp => 'Error'),
  //       catchError(err => of('Error en la consulta'))
  //     )
  // }

  getProductos(): Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.baseUrl}/auth/productos`);
  }

}
