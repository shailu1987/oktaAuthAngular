import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'okta-app';
  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService) {}

  ngOnInit() {
    this.oktaAuth.$isAuthenticated.subscribe(val => this.isAuthenticated = val);
  }
}
