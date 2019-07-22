import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog.component';

const PagesRoutes: Routes = [
    { path: '',
     component: PagesComponent,
    //  canActivate: [ LoginGuardGuard ],
     children: [
        { path: 'inicio', component: InicioComponent, data: { titulo: 'inicio' } },
        // { path: 'about', component: AboutComponent },
        { path: 'blog', component: BlogsComponent },
        { path: 'blog/:id', component: BlogComponent },
        // { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
        // { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
        // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
        // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
        // { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
        // { path: 'perfil', component: ProfileComponent, data: { titulo: 'perfil de usuario' } },
      //   Mantenimientos
        // { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimieto de usaurios' } },
        // { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimieto de hospitales' } },
        // { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimieto de Médicos' } },
        // { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
        // { path: '**', pathMatch: 'full', component: NotFoundComponent },
        { path: '', redirectTo: '/inicio', pathMatch: 'full' },
     ]
     },
];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );
