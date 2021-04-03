import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  createClient(): void {
    this.router.navigate(['/client'])
  }

}
