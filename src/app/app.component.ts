import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Helloworld";
  imgUrl="../assets/bg.png"
  url = "https://www.bridgelabz.com";
  userName: string ="";
  nameError: string ="";
  
  ngOnInit(): void{
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event:Data){
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank");

  }
  onInput($event:Data){
    console.log("change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[a-zA-Z]{2}[a-zA-Z\\s]+$');
    if(nameRegex.test(this.userName)){
    this.nameError =" ";
      return;
    }
    this.nameError = "Name is Incorrect";
  }
}
