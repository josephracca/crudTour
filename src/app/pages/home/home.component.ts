import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/interfaces/iuser';
import { AddService } from 'src/app/services/add/add.service';
import { DeleteService } from 'src/app/services/delete/delete.service';
import { GetService } from 'src/app/services/get/get.service';
import { LoginService } from 'src/app/services/login/login.service';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //create object that you want toa dd to your DB
  StudentOBJ: Iuser = {
    id: 0,
    firstName: "Joseph",
    lastName: "Racca",
    userName: "Angel",
    password: "password"
  }

  UpdatedOBJ: Iuser = {
    id: 23,
    firstName: "Aaron",
    lastName: "Racca",
    userName: "Joseph",
    password: "password"
  }

  constructor(
    private aService: AddService,
    private gService: GetService,
    private lService: LoginService,
    private dService: DeleteService,
    private uService: UpdateService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  //CREATE
  addStudent() {
    //this needs to match that 
    this.aService.addStudent(this.StudentOBJ)
      .then((res: any) => {
        console.log(res);
      });
    //after promise, we have our then, 
  }

  //READ
  getStudents() {
    this.gService.getStudents().then(
      (res: any) => {
        console.log(res);
      });
  }
  login() {
    this.lService.login(this.StudentOBJ).then(
      (res: any) => {
        localStorage.setItem("token", res.token);
        //this sets the token to local storage...
        //we can comment this since we know it's working
        console.log(res);
        this.router.navigate(["loggedin"])
      });
  }

  //UPDATE
  updateUser() {
    this.uService.update(this.UpdatedOBJ).then(
      (res: any) => {
        console.log(res)
      }
    )
  }

  //DELETE
  deleteuser() {
    this.dService.delete().then(
      (res: any) => {
        console.log(res);
      }
    )
  }
}
