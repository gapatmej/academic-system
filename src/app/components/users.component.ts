import {Component, OnInit} from "@angular/core"
import {User, Roles} from "./../models/model_views/User"
import {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'
import {UserService} from "./../services/users.service"
import {RolesService} from "./../services/roles.service"
import {getallusersservice001} from './../models/model_services/getallusersservice001'
import {getallrolesservice001} from './../models/model_services/getallrolesservice001'
import {saveuserservice001} from './../models/model_services/saveuserservice001'
import {updateuserservice001} from './../models/model_services/updateuserservice001'
import {deleteuserservice001} from './../models/model_services/deleteuserservice001'
import {AppComponent} from './../app.component'

declare var JQuery:any;
declare var $:any;
declare var angular:any;

@Component({
	templateUrl: "./../views/users.html"
})


export class UserComponent implements OnInit{
	public isNewRegister : boolean;
	public users: Array<User>;
	public roles : Array<Roles>;
	public user : User;
	public proccessjsonOutput : proccessjsonOutput; 
	public rolesUserLess : Array<Roles>;


	constructor(private _usersService: UserService, private _rolesService: RolesService ){
		AppComponent.modal = true;
		this.user = new User();
		this.users = new Array<User>();
		this.roles = new Array<Roles>();
		this.rolesUserLess = new Array<Roles>();
		this.uploadUsers();
		this.uploadRoles();
	}

	ngOnInit(){
		
	}

	onSubmit(){
		AppComponent.modal = true;
		if(this.isNewRegister){//CREATE
			this.user.password = sha256(this.user.password);
			this._usersService.saveUser(new saveuserservice001(this.user))
			.subscribe(proccessjsonOutput =>{
				AppComponent.modal = false;
				this.proccessjsonOutput = proccessjsonOutput;
				if(this.proccessjsonOutput.error.codError == "0"){
					alert("Registro Creado Exitosamente");
					this.uploadUsers();
					this.newRegister();
				}
				else{
					alert("Error al crear el registro");
				}
			});
		}
		else{//UPDATE
			this.user.password = sha256(this.user.password);
			this._usersService.updateUser(new updateuserservice001(this.user))
			.subscribe(proccessjsonOutput =>{
				AppComponent.modal = false;
				this.proccessjsonOutput = proccessjsonOutput;
				if(this.proccessjsonOutput.error.codError == "0"){
					alert("Registro Actualizado Exitosamente");
					this.uploadUsers();
					this.newRegister();
				}
				else{
					alert("Error al actualizar el registro");
				}
			});
		}
	}

	deleteRegister(value){
		this._usersService.deleteUser(new deleteuserservice001(value.idUser))
			.subscribe(proccessjsonOutput =>{
				AppComponent.modal = false;
				this.proccessjsonOutput = proccessjsonOutput;
					if(this.proccessjsonOutput.error.codError == "0"){
						alert("Registro Eliminado Exitosamente");
						this.uploadUsers();
						this.newRegister();
					}
					else{
						alert("Error al eliminar el registro");
					}
			});
	}

	crudRol(option, id){
		if(option === "add"){
			this.user.roles.push(this.rolesUserLess.find(i => i.idRol == id)); 
			this.rolesUserLess.splice(this.rolesUserLess.findIndex(i => i.idRol == id),1);
		}else if(option === "delete"){
			this.rolesUserLess.push(this.user.roles.find(i => i.idRol == id)); 
			this.user.roles.splice(this.user.roles.findIndex(i => i.idRol == id),1);
		}	

	}

	selectUser(value){
		this.user = value;
		this.uploadRolesOfUser(this.user.roles);
		this.isNewRegister = false;
	}

	newRegister(){
		this.rolesUserLess = JSON.parse(JSON.stringify(this.roles));
		this.user = new User();
		this.isNewRegister = true;
	}

	private uploadUsers(){
		AppComponent.modal = true;
		this._usersService.getAllUsers(new getallusersservice001() )
		.subscribe(proccessjsonOutput =>{
			AppComponent.modal = false;
			this.proccessjsonOutput = proccessjsonOutput;
			if(this.proccessjsonOutput.error.codError == "0"){
				this.users = this.proccessjsonOutput.bodyOutput.dataOutput;
				// Ini Component Jquery Table
				$(function () {
					$('#example1').DataTable()
					$('#example2').DataTable({
						'paging'      : true,
						'lengthChange': false,
						'searching'   : false,
						'ordering'    : true,
						'info'        : true,
						'autoWidth'   : false
					})
				})
				// End Component Jquery Table
			}
		});

	}

	private uploadRoles(){
		AppComponent.modal = true;
		this._rolesService.getAllRoles(new getallrolesservice001() )
		.subscribe(proccessjsonOutput =>{
			AppComponent.modal = false;
			this.proccessjsonOutput = proccessjsonOutput;
			if(this.proccessjsonOutput.error.codError == "0"){
				this.roles = this.proccessjsonOutput.bodyOutput.dataOutput;
				this.newRegister();
			}
		});
	}

	private uploadRolesOfUser(_roles:Array<Roles>){
		this.rolesUserLess = new Array<Roles>();
		for(let r of this.roles){
			if( _roles.findIndex(i => i.idRol == r.idRol) == -1){
				this.rolesUserLess.push(r);
			}
		}
	}

}