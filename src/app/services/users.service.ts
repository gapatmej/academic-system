import {ComponentFactoryResolver,Injectable,Inject,ReflectiveInjector} from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import  {classesMap, GlobalVariable} from './../models/global';
import  { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import  {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'
import {getallusersservice001} from './../models/model_services/getallusersservice001'
import {saveuserservice001} from './../models/model_services/saveuserservice001'
import {updateuserservice001} from './../models/model_services/updateuserservice001'
import {deleteuserservice001} from './../models/model_services/deleteuserservice001'

@Injectable()
export class UserService {

  public rootViewContainer;
  
  constructor(private _httpClient: HttpClient) {
  }


  getAllUsers(service: getallusersservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('getAllUsers', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }


  saveUser(service: saveuserservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('saveUser', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  updateUser(service: updateuserservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('updateUser', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  deleteUser(service: deleteuserservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('deleteUser', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}