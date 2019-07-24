import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { ADMIN_ROUTES } from './admin.routes';
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogAdminNuevoComponent } from './pages/blog-admin/blog-admin-nuevo.component';
import { PipesModule } from '../pipes/pipes.module';
import { CursosAdminComponent } from './pages/cursos-admin/cursos-admin.component';
import { CursosAdminNuevoComponent } from './pages/cursos-admin/cursos-admin-nuevo.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarAdminComponent,
    BlogAdminComponent,
    BlogAdminNuevoComponent,
    CursosAdminComponent,
    CursosAdminNuevoComponent,

  ],
  imports: [
    CommonModule,
    PipesModule,
    ADMIN_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    ImageCropperModule,
    NgxPaginationModule
  ],
  exports: [
    SidebarComponent,
    NavbarAdminComponent
  ]
})
export class AdminModule { }
