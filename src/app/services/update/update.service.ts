import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/interfaces/iuser';
import { dataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private dService: dataServiceService) { }

  update(userToUpdate: Iuser) {
    return this.dService.postFile("userinfo/update", userToUpdate).toPromise();
    //update endpoint is what we want to access
  }
}
