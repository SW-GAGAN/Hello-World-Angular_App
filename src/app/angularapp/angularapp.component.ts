import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularapp',
  templateUrl: './angularapp.component.html',
  styleUrls: ['./angularapp.component.css']
})
export class AngularappComponent implements OnInit {

public name = "Gagan Reddy";

  constructor() { }

  ngOnInit(): void {
    
  }
greetuser(){
  return"hello" + this.name;
}
}
