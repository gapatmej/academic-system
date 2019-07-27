import  { header } from './header';
import  { body } from './body';
import  { User } from './../model_views/User';


export class saveuserservice001{
	header : header;
	body: body;

	constructor(user:User)
	{
		this.header = new header('Administration','saveUserService001');
		this.body = new body(user);
	}
}
