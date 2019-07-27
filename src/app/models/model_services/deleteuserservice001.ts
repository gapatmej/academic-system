import  { header } from './header';
import  { body } from './body';


export class deleteuserservice001{
	header : header;
	body: body;

	constructor(idUser)
	{
		this.header = new header('Administration','deleteUserService001');
		this.body = new body({idUser:idUser});
	}
}
