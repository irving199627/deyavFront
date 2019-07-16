import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
import { ServiceModule } from './services/service.module';
import { RegistroComponent } from './login/registro.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    APP_ROUTES,
    ServiceModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
