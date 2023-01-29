import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { BackEndService } from 'src/app/services/api-interaction/back-end/back-end.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public usernameField = '';
  public passwordField = '';

  constructor(
    private backEndService: BackEndService,
    private router: Router
  ) { }

  public usernameUpdated(event: Event) {
    this.usernameField = (<HTMLInputElement>event.target).value;
  }

  public passwordUpdated(event: Event) {
    this.passwordField = (<HTMLInputElement>event.target).value;
  }

  public signIn() {
    this.backEndService.login({
      userName: this.usernameField,
      password: this.passwordField
    }).subscribe(
      (data) => {
        if (data.status === 'success') {
          sessionStorage.setItem('USER_DATA', JSON.stringify(data));
          this.router.navigate(['/profile']);
        }
      }
    )
  }

  public signUp() {
    this.router.navigate(['login/signUp']).then(
      data =>  console.log(data)
    )
  }

}
