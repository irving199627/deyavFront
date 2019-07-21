import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';

import { ServiceModule } from './services/service.module';
import { RegistroComponent } from './login/registro.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { AdminComponent } from './admin/admin.component';
import { ImageCropperModule } from 'ngx-image-cropper';


import { ADMIN_ROUTES } from './admin/admin.routes';
import { APP_ROUTES } from './app.routes';

// import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NotFoundComponent,
    AdminComponent,
    // ImagenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    AdminModule,
    APP_ROUTES,
    ADMIN_ROUTES,
    ServiceModule,
    ReactiveFormsModule,
    CKEditorModule,
    ImageCropperModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
