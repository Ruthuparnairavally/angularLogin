import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hide: boolean = false;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        phone : new FormControl('',[Validators.required, Validators.pattern("[0-9 ]{10}")]),
        password : new FormControl('',[Validators.required, Validators.minLength(6)]),
        otp : new FormControl('',[Validators.required, Validators.minLength(4)])
      }
    );

   
  }


  onLogin()
  {

  }
  
} 