import  { header } from './header';
import  { body } from './body';


export class getallusersservice001{
	header : header;
	body: body;

	constructor()
	{
		this.header = new header('Administration','getAllUsersService001');
		this.body = new body("");
	}
}
