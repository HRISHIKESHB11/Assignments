import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise1',
  templateUrl: './practise1.component.html',
  styleUrls: ['./practise1.component.css']
})
export class Practise1Component implements OnInit {

  newvar:string="color";
  newvar2:string="Hrishi";

  newvar3:string="color:red;background-color:black";

  hello(){
    console.log("hello i am running");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
