import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from './../../../client/client.service';
import { Client } from './../../../client/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-read-client',
  templateUrl: './os-read-client.component.html',
  styleUrls: ['./os-read-client.component.css']
})
export class OsReadClientComponent implements OnInit {

  OS_table_clients: Client[];
  displayedColumns = ['id', 'name', 'action'];

  constructor(private clientservice: ClientService, 
    private dialog: MatDialog, private router: Router) {this.OS_table_clients =  []}

  ngOnInit(): void {
    this.clientservice.read().subscribe(OS_table_clients=> {
      this.OS_table_clients = OS_table_clients;
    })
  }

  addClientOs(): void {
    //@ts-ignore
    document.getElementById("add")?.innerHTML = "done";
    //@ts-ignore
    document.getElementById("add")?.style.color = "#3f51b5";
  }

  newClient(): void {
    this.dialog.closeAll();
    this.router.navigate(['client/create']);
  }

  conclude(): void {
    this.dialog.closeAll()
  }

}
