import { Client } from './../client.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  //@ts-ignore
  client: Client

  constructor(private clientservice: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.clientservice.readById(id).subscribe(client => {this.client = client});
  }

  deleteClient(): void {
    this.clientservice.delete(this.client).subscribe(() => {this.clientservice.showMessage('Cliente excluído com sucesso!')})
    this.router.navigate(['/client'])
  }

  cancel(): void {
    this.router.navigate(['/client'])
  }

}
