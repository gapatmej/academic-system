
import { BillingComponent } from './../components/billing.component'
import { MeansComponent } from './../components/means.component'
import { RolesComponent } from './../components/roles.component'
import { UserComponent } from './../components/users.component'
import { WelcomeComponent } from './../components/welcome.component'

export const classesMap = {
	
  BillingComponent: BillingComponent,
  MeansComponent: MeansComponent,
  RolesComponent: RolesComponent,
  UserComponent: UserComponent,
  WelcomeComponent: WelcomeComponent
}

export const GlobalVariable = Object.freeze({
     BASE_API_URL: 'http://localhost:777/academic-system-api/proccessjson.php',
     idUser:''
 });