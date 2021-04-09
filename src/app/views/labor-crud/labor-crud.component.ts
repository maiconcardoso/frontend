import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor-crud',
  templateUrl: './labor-crud.component.html',
  styleUrls: ['./labor-crud.component.css']
})
export class LaborCrudComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  navigateToLaborCreate(): void {
    this.router.navigate(['/labor/create'])
  }

}
