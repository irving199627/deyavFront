import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { PAGES_ROUTES } from './pages.routes';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from '../components/share/navbar/navbar.component';
import { FooterComponent } from '../components/share/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog.component';

// import { TruncatePipe } from '../pipes/truncate.pipe';
// import { ImagenPipe } from '../pipes/imagen.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BlogsComponent,
    BlogComponent,
    // TruncatePipe,
    // ImagenPipe
  ],
  exports: [
    PagesComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    PipesModule,
    PAGES_ROUTES,
  ]
})
export class PagesModule { }
