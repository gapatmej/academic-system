import  { header } from './header';
import  { body } from './body';


export class deletemeanservice001{
	header : header;
	body: body;

	constructor(idMean)
	{
		this.header = new header('Administration','deleteMeanService001');
		this.body = new body({idMean:idMean});
	}
}
