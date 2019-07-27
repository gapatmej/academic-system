import  { header } from './header';
import  { body } from './body';


export class getallmeansservice001{
	header : header;
	body: body;

	constructor()
	{
		this.header = new header('Administration','getAllMeansService001');
		this.body = new body("");
	}
}
