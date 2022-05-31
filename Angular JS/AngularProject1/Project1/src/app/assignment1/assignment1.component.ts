import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  c:number;
  celcuis(f:number){
    this.c=(f-32)*5/9;
    console.log(this.c);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
