//Importar modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Importar Componentes
import {LoginComponent } from './components/login.component';
import {HomeComponent } from './components/home.component';
import {BillingComponent } from './components/billing.component';
import {WelcomeComponent } from './components/welcome.component';
import {MeansComponent } from './components/means.component';
import {RolesComponent } from './components/roles.component';
import {UserComponent } from './components/users.component';
import {Error404Component } from './components/error404.component';

//Array de las rutas

const appRoutes : Routes = [
	{path:'', component: HomeComponent},
	{path:'home', component: HomeComponent},
	{path:'welcome', component: WelcomeComponent},
	{path:'login', component: LoginComponent},
	{path:'billing', component: BillingComponent},
	{path:'means', component: MeansComponent},
	{path:'roles', component: RolesComponent},
	{path:'users', component: UserComponent},

	{path:'**', component: Error404Component}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);