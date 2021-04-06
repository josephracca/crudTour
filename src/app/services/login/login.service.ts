import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/interfaces/iuser';
import { dataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dService: dataServiceService) { }

  login(userToLogin: Iuser) {
    return this.dService.postFile("auth/login", userToLogin).toPromise();
  }
}
