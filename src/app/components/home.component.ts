import {Component, OnInit, Inject, Injectable, ViewChild, ViewContainerRef} from '@angular/core'
import {Router} from '@angular/router'
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service'
import {User} from './../models/model_views/User'
import {Means} from './../models/model_views/User'
import {MeansService} from "./../services/means.service"                

@Component({
	templateUrl: './../views/home.html'
})

export class HomeComponent implements OnInit{
	public user: User;
	public roles: string = "Roles : ";
	public means: Array<Means>;

	@ViewChild('component', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef

	constructor( @Inject(SESSION_STORAGE) private storage:StorageService, private router:Router, 
				@Inject(MeansService) private meansService){
		this.means = new Array<Means>();
	}

	ngOnInit(){
		
		if(this.storage.get("user") == null){
			this.router.navigate(['/login']);
		}else{
			this.user = this.storage.get("user");
			this.updloadRoles();
			this.uploadMeans();
			this.selectFunctionality('WelcomeComponent');
		}
	}

	private updloadRoles(){
		for(let r of this.user.roles){
			this.roles+= r.name + " - ";
      	}
	}

	private uploadMeans(){
		for(let r of this.user.roles){
			for(let m of r.means){
				if (!this.means.find(x => x.idMean == m.idMean))
					this.means.push(m);
			}
		}
	}

	selectFunctionality(dynamicComponent){
		this.viewContainerRef.clear();
		this.meansService.setRootViewContainerRef(this.viewContainerRef);
    	this.meansService.addDynamicComponent(dynamicComponent);
	}

	closeSession(){
		this.storage.remove("user");
		this.router.navigate(['/login']);
	}
}