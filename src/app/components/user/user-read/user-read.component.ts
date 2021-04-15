import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[]
  displayedColumns = ['id', 'name', 'nick', 'email', 'action']


  constructor(private userservice: UserService) {this.users = [] }

  ngOnInit(): void {
    this.userservice.read().subscribe(users => {
      this.users = users
    })
  }

}
