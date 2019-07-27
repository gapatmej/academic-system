
export class proccessjsonOutput{
	headerOutput : headerOutput;
	bodyOutput: bodyOuput;
	error: error;

	constructor(codError, messageError){
		let e = new error();
		e.codError= codError;
		e.messageError = messageError;
		this.error = e;
	}
}

class headerOutput{
	module:string;
	transaction:string;
 	date:string;

	 constructor(module, transaction, date){
	 		this.module = module;
	 		this.transaction = transaction;
	 		this.date = date;
	 }	
}

class bodyOuput{
	dataOutput: any;

	constructor(dataOutput){
	 		this.dataOutput = dataOutput;
	}	

}

class error{
	codError:string;
	messageError:string;
}



