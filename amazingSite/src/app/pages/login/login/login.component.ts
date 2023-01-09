import { Component } from '@angular/core';
import { BackEndService } from 'src/app/services/api-interaction/back-end/back-end.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private backEndService: BackEndService) {}

}
