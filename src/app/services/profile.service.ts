import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private hostName: string = '';
  private routeName: string = '';
  userImage: string = '';
  constructor(
    private _HttpClient: HttpClient,
    private _GlobalService: GlobalService
  ) {
    this.hostName = this._GlobalService.hostName;
    this.routeName = this._GlobalService.userRoute;
    this.userImage = this._GlobalService.userImage;
  }

  getSignedInUser(): Observable<any> {
    return this._HttpClient.get(`${this.hostName}${this.routeName}/me`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  updateSignedInUser(formData: any): Observable<any> {
    return this._HttpClient.put(
      `${this.hostName}${this.routeName}/updateMe`,
      formData,
      { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
  }

  updateSignedInUserPassword(formData: any): Observable<any> {
    return this._HttpClient.put(
      `${this.hostName}${this.routeName}/changeMyPassword`,
      formData,
      { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
  }
}
