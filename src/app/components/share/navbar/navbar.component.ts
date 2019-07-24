import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/service.index';
declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public usuarioService: UsuariosService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-shadowed-variable
      // const defaults = {
      //   sm: 540,
      //   md: 720,
      //   lg: 960,
      //   xl: 1140,
      //   navbar_expand: 'lg'
      // };
      // const screenWidth = $(document).width();
      // if (screenWidth >= defaults.lg) {
      //   $('#navbarServicios').hover( () => {
      //     $('#dropServices').addClass('show');
      //     $('#menuServicios').addClass('show').addClass('animated fadeIn')
      //     .one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', () => {
      //       $(this).removeClass('animated fadeIn');
      //     });
      //   }, () => {
      //     $('#dropServices').removeClass('show');
      //     $('#menuServicios').removeClass('show');
      //   });
      // }

      // $('.dropdown-menu a.dropdown-toggle').on('click', (e) => {
      //   if (!$(this).next().hasClass('show')) {
      //     $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
      //   }
      //   const $subMenu = $(this).next('.dropdown-menu');
      //   $subMenu.toggleClass('show');

      //   $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', () => {
      //     $('.dropdown-submenu .show').removeClass('show');
      //   });

      //   return false;
      // });
}

}
