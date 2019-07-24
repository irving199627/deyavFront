import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { BlogAdminNuevoComponent } from './pages/blog-admin/blog-admin-nuevo.component';
import { CursosAdminComponent } from './pages/cursos-admin/cursos-admin.component';
import { CursosAdminNuevoComponent } from './pages/cursos-admin/cursos-admin-nuevo.component';

const AdminRoutes: Routes = [
    { path: 'admin',
     component: AdminComponent,
    //  canActivate: [ LoginGuardGuard ],
     children: [
        // { path: 'inicio', component: InicioComponent, data: { titulo: 'inicio' } },
        // { path: 'about', component: AboutComponent },
        { path: 'blog', component: BlogAdminComponent },
        { path: 'blog/:action', component: BlogAdminNuevoComponent },
        { path: 'cursos', component: CursosAdminComponent },
        { path: 'cursos/:action', component: CursosAdminNuevoComponent },
        // { path: 'blog/:id', component: BlogComponent },
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
        // { path: '', redirectTo: '/about', pathMatch: 'full' },
     ]
     },
];

export const ADMIN_ROUTES = RouterModule.forChild( AdminRoutes );
