import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  hide = true;

  constructor(
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.pattern('^[A-z]{1}[A-Za-z]{2,}'), Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-z]{1}[A-Za-z]{2,}'), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.!@$-_]{8,}'), Validators.minLength(8)]),
      cpassword: new FormControl('', [Validators.required])
    });
  }

  Register() {
    this.userService.Register(this.RegisterForm.value)
      .subscribe((result: any) => {
        console.log(result);
        this.snackBar.open(`${result.message}`, '', {
          duration:5000
        });
        if(result.status == true)
      {
        this.router.navigateByUrl('/login');
      }

      });
  }

}
