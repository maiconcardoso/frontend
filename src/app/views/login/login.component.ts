import { UserService } from './../../components/user/user.service';
import { User } from './../../components/user/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User[]
  displayedColumns = ['id', 'name', 'nick', 'password']

  constructor(private userservice: UserService) { this.user = [] }

  ngOnInit(): void {
    this.userservice.read().subscribe(user=> {
      this.user = user
    })
  }
}
