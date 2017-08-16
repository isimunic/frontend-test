import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PolicyBis } from './policybis';
import { Policies } from './policies';
import { POLICIES } from './mock-policies';

@Injectable() 
export class PoliciesService { 

	policies: Policies;
 	myUrl = "http://www.mocky.io/v2/59927c08100000670b5577bd";	
 	altranUrl ="http://www.mocky.io/v2/580891a4100000e8242b75c5";
 	myJsonUrl = "assets/policies.json"; 

    constructor(private http:Http) 
    {
    	this.policies = new Policies();
    }
	
	getPoliciesMock(): Promise<Policies>  
	{
		this.policies.policies = POLICIES;
		return Promise.resolve(this.policies);	
	}  

    getPolicies(): Promise<Policies> {

	    let headers = new Headers();
	  		headers.append('Content-Type', 'application/json');
	  		headers.append('Access-Control-Allow-Origin', '*');

			
        return this.http.get(this.myUrl).toPromise()
	    .then(this.extractData)
	    .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
		let body = res.json();
	        return body;
    }

    private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	
}
  