import  { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import  { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import  {loginservice001} from './../models/model_services/loginservice001'
import  {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'
import  {GlobalVariable} from './../models/global';

@Injectable()
export class LoginService{

	constructor(private _httpClient: HttpClient){

	}

	getLogin(service: loginservice001): Observable<proccessjsonOutput> {
		console.log('Inicio login');
		let params = JSON.stringify(service);
		let headers = new HttpHeaders({'Content-Type':'application/json'});

		return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
		.pipe(
        	catchError(this.handleError('getLogin', new proccessjsonOutput('5','Usuario y/o contraseña incorrecta')))
      	);
	}

  	private handleError<T> (operation = 'operation', result?: T) {
		    return (error: any): Observable<T> => {
		      return of(result as T);
    		};
		}
}
