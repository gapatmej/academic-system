import  { header } from './header';
import  { body } from './body';
import  { Means } from './../model_views/User';


export class savemeanservice001{
	header : header;
	body: body;

	constructor(mean:Means)
	{
		this.header = new header('Administration','saveMeanService001');
		this.body = new body(mean);
	}
}
