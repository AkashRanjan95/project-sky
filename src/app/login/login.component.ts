import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  @ViewChild('loginBox', { static: false })
  loginBox!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  login(){
    alert("Login button has been clicked!!")
  }

  rotateCard(){
    this.loginBox.nativeElement.classList.toggle('hover');
  }
}
