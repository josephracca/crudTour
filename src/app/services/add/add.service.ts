import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/interfaces/iuser';
import { dataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private dService: dataServiceService) { }
  
  addStudent(studentToAdd:Iuser) {
    return this.dService.postFile("userinfo/add", studentToAdd).toPromise();
    //.toPromise is the same as .subscribe
    //think of it as our first then in our fetching...
    //QUESTION TO ASK:
  }
}
