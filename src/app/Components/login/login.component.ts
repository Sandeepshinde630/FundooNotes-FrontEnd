import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  hide = true;

  constructor(
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  Login() {
    this.userService.Login(this.LoginForm.value)
    .subscribe((result : any)=> {
      console.log(result);
      this.snackBar.open(`${result.message}`, '', {
        duration:5000
      });
      if(result.status == true){
        const params =  {
          UserId: result.data.userId,
          FirstName: result.data.firstName,
          LastName: result.data.lastName,
          Email: result.data.email,
          Token: result.tokenString
        }
        localStorage.setItem('FundooUser', JSON.stringify(params));
        this.router.navigateByUrl('/dashboard');
      }

    })

  }
}
