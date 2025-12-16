import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isValidEmail } from '../../utils/validations';
import { RouterModule } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = 'hakanozer02@gmail.com';
  password = '123456';

  constructor(private api: Api) {
    console.log('Login component initialized');
  }

  ngOnInit() {
    console.log('Login component ngOnInit called');
  }

  userLogin() {
    const emailValid = isValidEmail(this.email)
    if (emailValid) {
      this.api.userLogin(this.email, this.password).subscribe({
        next: (res) => {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("name", res.data.user.name);
          // redirect to dashboard
          //window.location.href = "/dashboard";
          window.location.replace("/dashboard");
        },
        error: (err) => {
          alert("Username or password is incorrect");
        }
      })
    }else {
      alert("Email is not valid");
    }
  }

  emailChange(event: any) {
    this.email = event.target.value;
    console.log("Email", this.email);
  }

}
