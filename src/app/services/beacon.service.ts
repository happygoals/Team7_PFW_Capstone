import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
//services file for our beacons, this has the links that angular will access when calling backend functions
export class BeaconService {
	constructor(private http: HttpClient, private router: Router) { }
	url = 'http://localhost:3000';

	getAllBeacons() {
	  return this
		.http
		.get(`${this.url}/beacons`);
	}
	getRouting(startDate, endDate, startTime, endTime){
		return this
		.http
		.get(`${this.url}/beacons/beaconsRouting`);

	}

}