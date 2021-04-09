import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-crud',
  templateUrl: './os-crud.component.html',
  styleUrls: ['./os-crud.component.css']
})
export class OsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOsCreate(): void {
    this.router.navigate(['os/create'])
  }

}
