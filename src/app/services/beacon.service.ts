import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
// services file for our beacons, this has the links that angular will access when calling backend functions
export class BeaconService {
  constructor(private http: HttpClient, private router: Router) {}
  url = 'http://localhost:3000';

  getAllBeacons(): Observable<any> {
    return this.http.get(`${this.url}/beacons`);
  }
  getBeaconSets(startDate, endDate, startTime, endTime): Observable<any> {
    return this.http.get(
      `${this.url}/beacons/beaconSets/` + startDate + `/` + endDate + `/` + startTime + `/` + endTime
    );
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
