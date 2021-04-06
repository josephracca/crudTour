import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


//create http options
//
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: 'root'
})
export class dataServiceService {

  public data: any;

  private url: string = environment.api;
  // we will create api later
  //now it's happy
  //

  //fill to get access
  constructor(private http: HttpClient, private router: Router) { }

  //takes in a key, router pair
  public get(key: string): Observable<any> {
    //make sure to do the import statement
    return this.http.get(this.url + key, httpOptions)
      .pipe(map(res => this.data = res),
      tap((res: any) => this.handleSuccess(res, null)),
      catchError(err => this.handleError(err)),
    );
    //so we can have access to our specified client
    //pipe tiues all functions together
  }

  private handleSuccess(res: any, optionalMsg?: any) {
    if (optionalMsg) {
      //this.toastService.showSuccess('Success', optionalMsg);
    }
  }

  private handleError(err: HttpErrorResponse, isLogin?: boolean) {
    let message: string = "";
    let route = '';
    if (err.status === 401) {
      message = !isLogin ? 'Unauthorized' : '';
      route = !isLogin ? 'sign-in' : '';
    } else if (err.status === 403) {
      message = 'Forbidden';
      route = 'login';
    } else if (err.status === 404) {
      route = 'notfound';
    } else {
      message = (err.error && typeof err.error === 'string') ? err.error : err.error.Message ? err.error.Message
        : err.message ? err.message : 'Ooops! Something went wrong!';
    }
    if (route) {
      this.router.navigate([route]);
    }
    if (message) {
      // this.toastService.showError('Error!', message);
    }
    return of(message);
  }

  hide(hide: boolean): boolean {
    return hide = true;
  }

  public postFile(url: string, data: any, opt?: any): Observable<any> {
    return this.http.post<any>(this.url + url, data, { headers: { 'enctype': 'multipart/form-data' } });
  }
}
