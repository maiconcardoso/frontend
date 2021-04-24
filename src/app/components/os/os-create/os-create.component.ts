import { Product } from './../../product/product.model';
import { Labor } from './../../labor/labor.model';
import { Client } from './../../client/client.model';
import { OsReadClientComponent } from './os-read-client/os-read-client.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  //@ts-ignore
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addClient(): void {
    this.dialog.open(OsReadClientComponent, {
      width: '900px'
    });
  }

  

}
