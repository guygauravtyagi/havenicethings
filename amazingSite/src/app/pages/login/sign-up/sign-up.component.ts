import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BackEndService } from 'src/app/services/api-interaction/back-end/back-end.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm = new FormGroup({
    userName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private backEndService: BackEndService) { }

  public confirm() {
    this.backEndService.signUp({
      firstName: this.signUpForm.value.firstName!,
      lastName: this.signUpForm.value.lastName!,
      password: this.signUpForm.value.password!,
      userName: this.signUpForm.value.userName!,
    }).subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

}
