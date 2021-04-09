import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-crud',
  templateUrl: './provider-crud.component.html',
  styleUrls: ['./provider-crud.component.css']
})
export class ProviderCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProviderCreate(): void {
    this.router.navigate(['/provider/create'])
  }

}
