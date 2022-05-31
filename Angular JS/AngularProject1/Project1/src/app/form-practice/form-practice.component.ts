import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent implements OnInit {
  username="abc";
  password="123";
  hrishi(a:NgForm){
    console.log("Here Value:"+a.value);
  }
  rest(b:NgForm){
    this.rest;
  }
  
  edititem(){
    console.log("Edit button is running");
    this.username="";
    this.password="";
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
