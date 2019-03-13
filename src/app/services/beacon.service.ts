import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Http,
  Response,
  Headers,
  URLSearchParams,
  RequestOptions
} from "@angular/http";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
//import { Beacon } from './beacon';
import { Beacon } from "../interfaces/beacon.interface";

@Injectable()
//services file for our beacons, this has the links that angular will access when calling backend functions
export class BeaconService {
  constructor(private http: HttpClient, private router: Router) {}
  url = "http://localhost:3000";

  getAllBeacons(): Observable<any> {
    return this.http.get(`${this.url}/beacons`);
  }
  getBeaconSets(startDate, endDate, startTime, endTime): Observable<any> {
    if (startDate != null || endDate != null || startTime || endTime) {
      return this.http.get(
        `${this.url}/beacons/beaconSets/` +
          startDate +
          `/` +
          endDate +
          `/` +
          startTime +
          `/` +
          endTime
      );
    }
  }

  // getHeatmap(startSet: string, endSet: string, startSet1: string, endSet2: string): Observable<any>{
  // 	// let myHeaders = new Headers();
  // 	// myHeaders.set('Content-type', 'application/json');
  // 	// let myParams = new URLSearchParams();
  // 	// myParams.set('Date', startSet);
  // 	// myParams.set('Time', endSet);
  // 	// let options = new RequestOptions({headers: myHeaders, params : myParams });
  // 	const params = {
  // 		param1: startSet,
  // 		param2: startSet1,
  // 		param3: endSet,
  // 		param4: endSet2
  // 	  }
  // 	return this
  // 	.http
  // 	.get(`${this.url}/beacons/beaconsRouting`, {params}).toPromise();

  // }
  // getRouting(data){
  // 	const params = {data}
  // 	return this
  // 	.http
  // 	.get(`${this.url}/beacons/beaconsRouting`, { params});

  // }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
