import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resultFromElectron?: string;
  getFromElectron?: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.resultFromElectron = this.authService.login(form.value.name, form.value.password);
  }
}
