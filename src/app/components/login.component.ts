import {Component, OnInit, Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Login} from './../models/model_views/Login'
import {User} from './../models/model_views/User'
import {loginservice001} from './../models/model_services/loginservice001'
import {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'
import {LoginService} from './../services/login.service'
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service'
import {AppComponent} from './../app.component'

@Component({
	templateUrl: "./../views/login.html",
	providers: [LoginService]	
})


export class LoginComponent implements OnInit{
	public login: Login;
	public proccessjsonOutput : proccessjsonOutput;

	constructor(private _loginService: LoginService, @Inject(SESSION_STORAGE) private storage:StorageService,
				private router: Router){
		if(this.storage.get("user") != null){
			this.router.navigate(['/home']);
		}
		this.login = new Login("","");
	}

	onSubmit(){
		AppComponent.modal = true;
		console.log(sha256(this.login.password));
		this._loginService.getLogin( new loginservice001(this.login.username, sha256(this.login.password)) )
		.subscribe(proccessjsonOutput =>{
			AppComponent.modal = false;
			this.proccessjsonOutput = proccessjsonOutput;
			if(this.proccessjsonOutput.error.codError == "0"){
				this.saveSession(this.proccessjsonOutput.bodyOutput.dataOutput);
				//alert(JSON.stringify(this.proccessjsonOutput.bodyOutput.dataOutput));
				this.router.navigate(['/home']);
			}
			else{
				alert(this.proccessjsonOutput.error.messageError);
			}

		});
	}

	ngOnInit(){
		/*this.login.username = "agperalt";
		this.login.password = "1234a5";*/
	}

	private saveSession(user){
		this.storage.set("user", user);
	}
}
