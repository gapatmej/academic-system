import  { header } from './header';
import  { body } from './body';


export class deleterolservice001{
	header : header;
	body: body;

	constructor(idRol)
	{
		this.header = new header('Administration','deleteRolService001');
		this.body = new body({idRol:idRol});
	}
}
