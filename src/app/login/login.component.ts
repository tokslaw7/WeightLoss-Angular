import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$: any[];
  formLogin: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.formLogin = this.createFormGroup();
    this.user$ = [];
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.min(2)]),
      password: new FormControl('', [Validators.required, Validators.min(2)])
    });
  }

  onSubmit(): void {
    let currentUser = this.formLogin.value.username;
    let currentPassword = this.formLogin.value.password;
    this.http.get(
      'http://localhost:3000/employees',
      {
        params: {username: currentUser}
      }
    ).subscribe(result => {
      // if(currentUser == result[0].username && currentPassword == result[0].password) {
      //   console.log ('user is valid')
      // localStorage.setItem('validuser', currentUser);
      // this.router.navigateByUrl('home');
      // } else {
      //   console.log ('Invalid user');
      //   this.router.navigateByUrl('login');
      // }

    });
  }

}
