import  { header } from './header';
import  { body } from './body';
import  { Means } from './../model_views/User';


export class updatemeanservice001{
	header : header;
	body: body;

	constructor(mean:Means)
	{
		this.header = new header('Administration','updateMeanService001');
		this.body = new body(mean);
	}
}
