import {ComponentFactoryResolver,Injectable,Inject,ReflectiveInjector} from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import  {classesMap, GlobalVariable} from './../models/global';
import  { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import  {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'
import {getallrolesservice001} from './../models/model_services/getallrolesservice001'
import {saverolservice001} from './../models/model_services/saverolservice001'
import {updaterolservice001} from './../models/model_services/updaterolservice001'
import {deleterolservice001} from './../models/model_services/deleterolservice001'

@Injectable()
export class RolesService {

  public rootViewContainer;
  
  constructor(private _httpClient: HttpClient) {
  }


  getAllRoles(service: getallrolesservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('getAllRoles', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  saveRol(service: saverolservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('saveRol', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  updateRol(service: updaterolservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('updateRol', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  deleteRol(service: deleterolservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('deleteRol', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}