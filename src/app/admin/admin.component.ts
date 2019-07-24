import { Component, OnInit } from '@angular/core';
declare const $: any;
declare function inicialiazarSidebar();
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    inicialiazarSidebar();
  }


}
