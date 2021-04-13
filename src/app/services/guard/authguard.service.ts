import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private lService: LoginService, private router: Router, private jwtHelper: JwtHelperService) { }

  // canActivate() {
  //   const token = this.lService.getLoginBool();
  //   //now we can check to see if it is true or false, OR in our next example we will be pulling this from local storage...

  //   if (token == false) {
  //     this.router.navigate([""]);
  //     //we want it to stay at the home page and so we use the wildcard path...
  //     return false;
  //   } else {
  //     return true;
  //   }
  //   //still need to do one more piece: return true, will give us access to whatever route/page we are trying to activate, otherwise we need to do one more step... we need an unauthorized page
  // }
  
  //duplicate from above with changes
  canActivate() {
    const token: string = localStorage.getItem("token");

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // this.router.navigate([""]);
      //true: we want to go to the proper page...
      return true;
    } else {
      localStorage.removeItem("token");
      //so once that's gone and removed it will route back to the login/page that you want to get abck to...
      this.router.navigate(['']);
      return false;
    }
  }
}
