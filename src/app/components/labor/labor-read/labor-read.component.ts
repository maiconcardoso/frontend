import { LaborService } from './../labor.service';
import { Labor } from './../labor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor-read',
  templateUrl: './labor-read.component.html',
  styleUrls: ['./labor-read.component.css']
})
export class LaborReadComponent implements OnInit {

  labors: Labor[]
  displayedColumns = ['id', 'nameLabor', 'price', 'brandCar', 'modelMotor', 'action']

  constructor(private laborservice: LaborService) {this.labors = [] }

  ngOnInit(): void {
    this.laborservice.read().subscribe(labors => {
      this.labors = labors
    })
  }
}
