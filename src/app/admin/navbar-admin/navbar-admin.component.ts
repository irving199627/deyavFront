import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    // $('#menu-toggle').click(function(e) {
    //   e.preventDefault();
      $('#wrapper').toggleClass('toggled');
  // });
  }
}
