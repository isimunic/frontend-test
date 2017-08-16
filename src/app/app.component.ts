import { Component, OnInit } from '@angular/core';
import { PoliciesService } from './policies.service';

import { PolicyBis } from './policybis';
import { Policies } from './policies';
  
@Component({
	selector: 'app-root', 
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [PoliciesService]
})
  
export class AppComponent implements OnInit {
  	policies: Policies;

	constructor(private policiesService: PoliciesService) 
	{ 
		this.policies = new Policies();
	};

	getPolicies(): void 
	{
		this.policiesService.getPolicies().then(policies => this.policies = policies);
	}

	ngOnInit(): void 
	{
		this.getPolicies(); 
	}
}
