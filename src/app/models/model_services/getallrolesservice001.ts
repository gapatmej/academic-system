import  { header } from './header';
import  { body } from './body';


export class getallrolesservice001{
	header : header;
	body: body;

	constructor()
	{
		this.header = new header('Administration','getAllRolesService001');
		this.body = new body("");
	}
}
