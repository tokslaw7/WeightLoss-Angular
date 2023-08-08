import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  formRegister:FormGroup;

  constructor(private http:HttpClient) {
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
    this.http.post(
      'http://localhost:3000/employees',
      this.formRegister.value
    )
      .subscribe({
        next: response => console.log(response),
        error: err => console.log(err),
        complete: () => console.log("Done with getting data")
      });

      // .subscribe(response => console.log(response));
    // console.log(this.formRegister.value);
  }

}
