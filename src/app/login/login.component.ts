import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  @ViewChild('loginBox', { static: false })
  loginBox!: ElementRef;

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  login(username:string, password:string){
    if(username !== null && password !==null && username === 'akash' && password==='sky'){
      this._router.navigate(['home']);
    } else {
      alert("Invalid credentials!!");
    }
  }

  rotateCard(){
    this.loginBox.nativeElement.classList.toggle('hover');
  }
}
