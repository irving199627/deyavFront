import { Component, OnInit } from '@angular/core';
declare const $: any;
declare var jQuery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-shadowed-variable
    ( ($) => {
      const defaults = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        navbar_expand: 'lg'
      };
      $.fn.bootnavbar = function() {

        const screenWidth = $(document).width();

        if (screenWidth >= defaults.lg) {
          $(this).find('.dropdown').hover(function() {
            $(this).addClass('show');
            $(this).find('.dropdown-menu').first().addClass('show').addClass('animated fadeIn')
            .one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function() {
              $(this).removeClass('animated fadeIn');
            });
          }, function() {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').first().removeClass('show');
          });
        }

        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
          if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
          }
          const subMenu = $(this).next('.dropdown-menu');
          subMenu.toggleClass('show');

          $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', () => {
            $('.dropdown-submenu .show').removeClass('show');
          });

          return false;
        });
      };
    })(jQuery);
      // const defaults = {
      //   sm: 540,
      //   md: 720,
      //   lg: 960,
      //   xl: 1140,
      //   navbar_expand: 'lg'
      // };
      // const screenWidth = $(document).width();
      // if (screenWidth >= defaults.lg) {
      //   $(this).find('.dropdown').hover( () => {
      //     console.log($(this).find('.dropdown'), 'dsa');
      //     $('.dropdown').children('#navbarServicios').addClass('show');
      //     $(this).find('.dropdown-menu').first().addClass('show').addClass('animated fadeIn')
      //     .one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', () => {
      //       $(this).removeClass('animated fadeIn');
      //     });
      //   }, () => {
      //     $('.dropdown').removeClass('show');
      //     $(this).find('.dropdown-menu').first().removeClass('show');
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
