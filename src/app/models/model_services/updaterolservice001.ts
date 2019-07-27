import  { header } from './header';
import  { body } from './body';
import  { Roles } from './../model_views/User';


export class updaterolservice001{
	header : header;
	body: body;

	constructor(rol:Roles)
	{
		this.header = new header('Administration','updateRolService001');
		this.body = new body(rol);
	}
}
