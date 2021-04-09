import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor-create',
  templateUrl: './labor-create.component.html',
  styleUrls: ['./labor-create.component.css']
})
export class LaborCreateComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/labor'])
  }

}
