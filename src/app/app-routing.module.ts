import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'forgotpassword' , component:ForgotPasswordComponent},
  {path: '' , redirectTo:'/login', pathMatch:'full'},
  {path: 'resetpassword' , component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
