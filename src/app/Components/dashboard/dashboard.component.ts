import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  expand = true;
  view = false;
  name = "";
  lastname = "";
  email = "";
  navButton="Notes";
  value="side";

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    var userData = localStorage.getItem('FundooUser');
    this.name = JSON.parse(userData!).FirstName;
    this.lastname = JSON.parse(userData!).LastName;
    this.email = JSON.parse(userData!).Email;
  }
  LogOut(){
    localStorage.removeItem('FundooUser');
    this.router.navigateByUrl('/login');
  }


}
