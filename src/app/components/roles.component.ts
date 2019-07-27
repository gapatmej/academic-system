import {Component, OnInit} from "@angular/core"
import {Roles, Means} from "./../models/model_views/User"
import {RolesService} from "./../services/roles.service"
import {MeansService} from "./../services/means.service"
import {getallrolesservice001} from "./../models/model_services/getallrolesservice001"
import {getallmeansservice001} from "./../models/model_services/getallmeansservice001"
import {saverolservice001} from "./../models/model_services/saverolservice001"
import {updaterolservice001} from "./../models/model_services/updaterolservice001"
import {deleterolservice001} from "./../models/model_services/deleterolservice001"
import {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'
import {AppComponent} from './../app.component'

@Component({
	templateUrl: "./../views/roles.html"
})

export class RolesComponent implements OnInit{
	public roles: Array<Roles>;
	public means : Array<Means>;
	public rol : Roles;
	public proccessjsonOutput : proccessjsonOutput; 
	public meansRolesLess : Array<Means>;

	constructor(private _rolesService: RolesService, private _meansService: MeansService ){
		AppComponent.modal = true;
		this.rol = new Roles();
		this.roles = new Array<Roles>();
		this.means = new Array<Means>();
		this.meansRolesLess = new Array<Means>();
		this.uploadRoles();
		this.uploadMeans();

	}

	ngOnInit(){
	}

	onSubmit(){
		AppComponent.modal = true;
		if(this.rol.idRol == "" || this.rol.idRol == undefined){//CREATE
			this._rolesService.saveRol(new saverolservice001(this.rol))
			.subscribe(proccessjsonOutput =>{
				AppComponent.modal = false;
				this.proccessjsonOutput = proccessjsonOutput;
					if(this.proccessjsonOutput.error.codError == "0"){
						alert("Registro Creado Exitosamente");
						this.uploadRoles();
						this.newRegister();
					}
					else{
						alert("Error al crear el registro");
					}
			});
		}
		else{//UPDATE
			this._rolesService.updateRol(new updaterolservice001(this.rol))
				.subscribe(proccessjsonOutput =>{
					AppComponent.modal = false;
					this.proccessjsonOutput = proccessjsonOutput;
					if(this.proccessjsonOutput.error.codError == "0"){
						alert("Registro Actualizado Exitosamente");
						this.uploadRoles();
						this.newRegister();
					}
					else{
						alert("Error al actualizar el registro");
					}
			});
		}
	}

	deleteRegister(value){
		AppComponent.modal = true;
		this._rolesService.deleteRol(new deleterolservice001(value.idRol))
			.subscribe(proccessjsonOutput =>{
				AppComponent.modal = false;
				this.proccessjsonOutput = proccessjsonOutput;
					if(this.proccessjsonOutput.error.codError == "0"){
						alert("Registro Eliminado Exitosamente");
						this.uploadRoles();
						this.newRegister();
					}
					else{
						alert("Error al eliminar el registro");
					}
			});
	}

	crudMean(option, id){
		if(option === "add"){
			this.rol.means.push(this.meansRolesLess.find(i => i.idMean == id));
			this.meansRolesLess.splice(this.meansRolesLess.findIndex(i => i.idMean == id),1);
		}else if(option === "delete"){
			this.meansRolesLess.push(this.rol.means.find(i => i.idMean == id));
			this.rol.means.splice(this.rol.means.findIndex(i => i.idMean == id),1);
		}
	}

	selectRol(value){
		this.rol = value;
		this.uploadMeansOfRol(this.rol.means);
	}

	newRegister(){
		this.meansRolesLess = JSON.parse(JSON.stringify(this.means));
		this.rol = new Roles();
	}

	private uploadRoles(){
		AppComponent.modal = true;
		this._rolesService.getAllRoles(new getallrolesservice001() )
		.subscribe(proccessjsonOutput =>{
			AppComponent.modal = false;
			this.proccessjsonOutput = proccessjsonOutput;
			if(this.proccessjsonOutput.error.codError == "0"){
				this.roles = this.proccessjsonOutput.bodyOutput.dataOutput;
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

	private uploadMeans(){
		AppComponent.modal = true;
		this._meansService.getAllMeans(new getallmeansservice001() )
		.subscribe(proccessjsonOutput =>{
			AppComponent.modal = false;
			this.proccessjsonOutput = proccessjsonOutput;
			if(this.proccessjsonOutput.error.codError == "0"){
				this.means = this.proccessjsonOutput.bodyOutput.dataOutput;
				this.newRegister();
			}
		});
	}

	private uploadMeansOfRol(_means:Array<Means>){
		this.meansRolesLess = new Array<Means>();
		for(let m of this.means){
			if( _means.findIndex(i => i.idMean == m.idMean) == -1){
				this.meansRolesLess.push(m);
			}
		}
	}



}