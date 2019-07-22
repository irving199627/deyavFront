import { Component, OnInit } from '@angular/core';
declare const $: any;
declare function init_plugins();
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    $(() => {
      $('#bootnavbar').bootnavbar();
  });
  }


}
