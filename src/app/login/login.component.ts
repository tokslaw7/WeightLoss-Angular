import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin:FormGroup;

  constructor(private http:HttpClient) {
    this.formLogin = this.createFormGroup();
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
    this.http.post(
      'http://localhost:3000/employees',
      this.formLogin.value
    )
      .subscribe({
        next: response => console.log(response),
        error: err => console.log(err),
        complete: () => console.log("Done with getting data")
      });

  }
}
