import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // if you want to logout
  logOut() {
    localStorage.removeItem("token");
    console.log("logged out!");
    this.router.navigate([""]);
    //
  }
}
