// callback.component.ts

import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './app.service';

@Component({ template: "This is callback compoent " })
export class CallbackComponent implements OnInit {

  constructor(private okta: OktaAuthService) {}

  ngOnInit() {
    // Handles the response from Okta and parses tokens
    this.okta.handleAuthentication();
  }
}

