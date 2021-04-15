import { Router, ActivatedRoute } from '@angular/router';
import { LaborService } from './../labor.service';
import { Labor } from './../labor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor-update',
  templateUrl: './labor-update.component.html',
  styleUrls: ['./labor-update.component.css']
})
export class LaborUpdateComponent implements OnInit {

  //@ts-ignore
  labor: Labor;

  constructor(private laborservice: LaborService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.laborservice.readById(id).subscribe(labor => {this.labor = labor});
  }

  updateLabor(): void {
    this.laborservice.update(this.labor).subscribe(() => {
      this.laborservice.showMessage('Serviço atualizado com sucesso!')
    })
    this.router.navigate(['/labor'])
  }

  cancel(): void {
    this.router.navigate(['/labor'])
  }

}
