import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  save = 1;
  constructor(
    public authService: AuthService,
    public router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack = () => {
    this.location.back();
  }
}
