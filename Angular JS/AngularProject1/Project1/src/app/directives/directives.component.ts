import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  week=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
  mark=59;
  choice="2";
  constructor() { }

  ngOnInit(): void {
  }

}
