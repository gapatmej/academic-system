import {User} from './../model_views/User';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service'
import {Inject} from '@angular/core'

export class header{
	//public user: User;
	@Inject(SESSION_STORAGE) private storage:StorageService;

	module:string;
	transaction:string;
 	date:string;
 	idUser:string;
 	password:string;

	 constructor(module, transaction){
	 		this.module = module;
	 		this.transaction = transaction;
	 		this.getDateWithFormat();

	 		if(sessionStorage.getItem("user") != null){
				let user = JSON.parse(sessionStorage.getItem("user"));
	 			this.idUser = user.idUser;
	 			this.password = user.password;
	 		}
	 }	

 	 getDateWithFormat() {
	    var fullDate = new Date();
	    var d = fullDate.getDay();
	    var m = fullDate.getMonth();
	    var y = fullDate.getFullYear();
	    this.date = d+"/"+m+"/"+y;
	    //alert(d);
	}
}
