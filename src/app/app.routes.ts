import { RouterModule, Routes } from '@angular/router' ;

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: 'registro', component: RegistroComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
