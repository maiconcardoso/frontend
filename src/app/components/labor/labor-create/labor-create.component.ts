import { LaborService } from './../labor.service';
import { Labor } from './../labor.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor-create',
  templateUrl: './labor-create.component.html',
  styleUrls: ['./labor-create.component.css']
})
export class LaborCreateComponent implements OnInit {

  labor: Labor = {
    nameLabor: '',
    //@ts-ignore
    price: null,
    brandCar: '',
    modelMotor: ''

  }

  constructor(private router: Router, private laborservice: LaborService ) { }

  ngOnInit(): void {
  }

  createLabor(): void {
    this.laborservice.create(this.labor).subscribe(() => {
      this.laborservice.showMessage('Serviço criado com sucesso!')
      this.router.navigate(['/labor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/labor'])
  }

}
