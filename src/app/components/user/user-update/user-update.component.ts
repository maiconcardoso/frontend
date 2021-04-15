import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  //@ts-ignore
  user: User;

  constructor(private userservice: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.userservice.readById(id).subscribe(user => {this.user = user})
  }

  updateUser(): void {
    this.userservice.update(this.user).subscribe(() => {this.userservice.showMessage('Usuario atualizado com sucesso!')})
    this.router.navigate(['/register'])
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }

}
