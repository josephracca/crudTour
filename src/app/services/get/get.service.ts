import { Injectable } from '@angular/core';
import { AddService } from '../add/add.service';
import { dataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private dService: dataServiceService) { }

  getStudents() {
    return this.dService.get("userinfo").toPromise();
  }
}
