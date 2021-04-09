import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
  
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    nick: '',
    email: '',
    password: ''
  }

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userservice.create(this.user).subscribe(() => {
      this.userservice.showMessage('Usuario cadastrado com sucesso!')
      this.router.navigate(['/register'])
    })
  }

}
