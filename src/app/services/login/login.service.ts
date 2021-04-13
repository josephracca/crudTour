import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/interfaces/iuser';
import { dataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //false on start so they don't have access and declines person trying to get in
  loggedInBool: boolean = false;

  constructor(private dService: dataServiceService) { }

  login(userToLogin: Iuser) {
    return this.dService.postFile("auth/login", userToLogin).toPromise();
  }

  //now create function to set boolean
  setLoginBool(loginValue: any) {
    //if not null, we want top flip that bool to true, so if we're being passed in a token or an object, then that means we are good to go...flip bool to true
    if (loginValue != null) {
      this.loggedInBool = true;
    } else {
      this.loggedInBool = false;
    }
  }

  //now we need to get our boolean that needs to be checked against
  getLoginBool() {
    return this.loggedInBool;
  }

  //will not use the setLoginBool function later on... just using it to hard code at the moment...
  //now we ahve functions getting and setting from local storage if you want to look at it like that...

}
