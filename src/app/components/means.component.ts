import {Component, OnInit} from "@angular/core"
import {Means} from './../models/model_views/User'
import {MeansService} from './../services/means.service'
import {getallmeansservice001} from './../models/model_services/getallmeansservice001'
import {savemeanservice001} from './../models/model_services/saveMeanService001'
import {updatemeanservice001} from './../models/model_services/updatemeanservice001'
import {deletemeanservice001} from './../models/model_services/deletemeanservice001'
import {proccessjsonOutput} from './../models/model_services/proccessjsonOutput'
import {AppComponent} from './../app.component'

declare var JQuery:any;
declare var $:any;

@Component({
	templateUrl: "./../views/means.html"
})

export class MeansComponent implements OnInit{

	public mean: Means;
	public means: Array <Means>;
	public proccessjsonOutput : proccessjsonOutput; 

	constructor(private _meanService: MeansService){
		AppComponent.modal = true;
		this.mean = new Means();
		this.means = new Array<Means>();
		this.uploadMeans();
	}

	ngOnInit(){
		
	}

	onSubmit(){
		AppComponent.modal = true;
		if(this.mean.idMean == "" || this.mean.idMean == undefined){//CREATE
			this._meanService.saveMean(new savemeanservice001(this.mean))
			.subscribe(proccessjsonOutput =>{
				AppComponent.modal = false;
				this.proccessjsonOutput = proccessjsonOutput;
					if(this.proccessjsonOutput.error.codError == "0"){
						alert("Registro Creado Exitosamente");
						this.uploadMeans();
						this.newRegister();
					}
					else{
						alert("Error al crear el registro");
					}
			});
		}
		else{//UPDATE
			this._meanService.updateMean(new updatemeanservice001(this.mean))
				.subscribe(proccessjsonOutput =>{
					AppComponent.modal = false;
					this.proccessjsonOutput = proccessjsonOutput;
					if(this.proccessjsonOutput.error.codError == "0"){
						alert("Registro Actualizado Exitosamente");
						this.uploadMeans();
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
		this._meanService.deleteMean(new deletemeanservice001(value.idMean))
			.subscribe(proccessjsonOutput =>{
				AppComponent.modal = false;
				this.proccessjsonOutput = proccessjsonOutput;
					if(this.proccessjsonOutput.error.codError == "0"){
						alert("Registro Eliminado Exitosamente");
						this.uploadMeans();
						this.newRegister();
					}
					else{
						alert("Error al eliminar el registro");
					}
			});
	}

	private uploadMeans(){
		this._meanService.getAllMeans(new getallmeansservice001() )
		.subscribe(proccessjsonOutput =>{
			AppComponent.modal = false;
			this.proccessjsonOutput = proccessjsonOutput;
			if(this.proccessjsonOutput.error.codError == "0"){
				this.means = this.proccessjsonOutput.bodyOutput.dataOutput;
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

	selectFunctionality(value){
		this.mean = value;
	}

	newRegister(){
		this.mean = new Means();
	}
}
