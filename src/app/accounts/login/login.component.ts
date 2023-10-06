import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public routerService:Router) { }

  ngOnInit(): void {
  }
  signIn(){
  this.routerService.navigate(["/health"]);
  }

}
