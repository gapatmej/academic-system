import  { header } from './header';
import  { body } from './body';


export class loginservice001{
	header : header;
	body: body;

	constructor(idUser, password)
	{
		this.header = new header('Administration','loginService001');
		this.header.idUser = idUser;
		this.header.password = password;
		this.body = new body("");
	}
}
