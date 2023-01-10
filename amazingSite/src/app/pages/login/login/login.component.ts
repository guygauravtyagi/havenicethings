import { Component } from '@angular/core';
import { BackEndService } from 'src/app/services/api-interaction/back-end/back-end.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public usernameField = '';
  public passwordField = '';

  constructor(private backEndService: BackEndService) {}

  public usernameUpdated(event: Event) {
    this.usernameField = (<HTMLInputElement>event.target).value;
  }

  public passwordUpdated(event: Event) {
    this.passwordField = (<HTMLInputElement>event.target).value;
  }

  public signIn() {
    this.backEndService.login({
      username: this.usernameField,
      password: this.passwordField
    }).subscribe(
      (data) => console.log(data)
    )
  }

}
