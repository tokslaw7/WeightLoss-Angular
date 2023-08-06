import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  formRegister:FormGroup;

  constructor() {
    this.formRegister = this.createFormGroup();
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
    console.log(this.formRegister.value);
  }

}
