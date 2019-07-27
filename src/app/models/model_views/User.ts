export class User{
	idUser : string;
	password: string;
	name: string;
	lastName : string;
	phone : string;
	address : string;
	photo : string;
	roles : Roles[];

	constructor(){
		this.roles = new Array<Roles>();
	}
}

export class Roles{
	idRol:string;
	name:string;
 	mnemonic:string;
 	description:string;
 	means:Means[];	

 	constructor(){
		this.means = new Array<Means>();
	}
}

export class Means{
	idMean:string;
	name:string;
 	mnemonic:string;
 	component:string;
 	description:string;
}
