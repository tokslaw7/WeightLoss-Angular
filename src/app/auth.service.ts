import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import { Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;

  constructor(private http: HttpClient) { }

  login (userData:any): Observable<boolean> {
    let currentUser = userData.username;
    let currentPassword = userData.password;
    let isLoggedIn = false;
    let subject = new Subject<boolean>();
    this.http.get('http://localhost:3000/employees',
      {
        params:{username:currentUser}
      }
    )
      .subscribe(data => {
      if(currentUser == data[0].username && currentPassword == data[0].password){
        localStorage.setItem('validuser', currentUser);
        isLoggedIn = true;
      } else {
        isLoggedIn = false;
      }
    });
  }
}
