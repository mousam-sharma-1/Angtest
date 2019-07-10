import { Component, OnInit } from '@angular/core';
//import { addListener } from 'cluster';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

messageNew: string;
num: number=10;

  constructor() { 
    setInterval(()=>{
      let d= new Date();
      this.messageNew = d.toDateString() +'----TIME----'+d.toLocaleTimeString();
    },1000)

  }
  ngOnInit() {
    
  }
  addTwo(a: number , b: number){
return a+b;
  }
}
