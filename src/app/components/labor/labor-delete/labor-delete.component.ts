import { Router, ActivatedRoute } from '@angular/router';
import { LaborService } from './../labor.service';
import { Labor } from './../labor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor-delete',
  templateUrl: './labor-delete.component.html',
  styleUrls: ['./labor-delete.component.css']
})
export class LaborDeleteComponent implements OnInit {

  //@ts-ignore
  labor: Labor;

  constructor(private laborservice: LaborService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.laborservice.readById(id).subscribe(labor => {this.labor = labor});
  }

  deleteLabor(): void {
    this.laborservice.delete(this.labor).subscribe(() => {
      this.laborservice.showMessage('Serviço Excluido com sucesso!')
    })
    this.router.navigate(['/labor'])
  }

  cancel(): void {
    this.router.navigate(['/labor'])
  }

}
