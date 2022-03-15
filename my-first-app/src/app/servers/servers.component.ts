import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //adding [] will make the seletector as attributes
  // selector: '.app-servers', // selecting by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
