import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/interfaces/iuser';
import { dataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private dService: dataServiceService) { }
  //id = 23
  delete() {
    return this.dService.delete('userinfo/29').toPromise();
    //no variable here to pass in, we need to pass in an ID  }
  }
}