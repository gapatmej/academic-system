import {ComponentFactoryResolver,Injectable,Inject,ReflectiveInjector} from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import  {classesMap, GlobalVariable} from './../models/global';
import  { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {getallmeansservice001} from './../models/model_services/getallmeansservice001'
import {savemeanservice001} from './../models/model_services/saveMeanService001'
import {updatemeanservice001} from './../models/model_services/updatemeanservice001'
import {deletemeanservice001} from './../models/model_services/deletemeanservice001'
import  {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'

@Injectable()
export class MeansService {

  public rootViewContainer;
  
  constructor(@Inject(ComponentFactoryResolver) private factoryResolver, private _httpClient: HttpClient) {
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  addDynamicComponent(dynamicComponent) {
    //const factory = this.factoryResolver.resolveComponentFactory(this.getComponent(dynamicComponent));
    let factory = this.factoryResolver.resolveComponentFactory(classesMap[dynamicComponent].prototype.constructor);

    let component = factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(component.hostView)
  }

  getAllMeans(service: getallmeansservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('getAllMeans', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  saveMean(service: savemeanservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('saveMean', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  updateMean(service: updatemeanservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('updateMean', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  deleteMean(service: deletemeanservice001): Observable<proccessjsonOutput> {
    let params = JSON.stringify(service);
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._httpClient.post<proccessjsonOutput>(GlobalVariable.BASE_API_URL, params, {headers: headers})
    .pipe(
          catchError(this.handleError('deleteMean', new proccessjsonOutput('-1','Error en la conexion')))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}