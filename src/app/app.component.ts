import { Component, NgModule } from '@angular/core';

@Component({
	selector: 'app-root',
  	templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'academic-system';
  static modal:boolean ;
  public appCom ;

  constructor(){
  	this.appCom = AppComponent;
  	this.appCom.modal = false;
  }
}

