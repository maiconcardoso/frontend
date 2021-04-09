import { ClientService } from './../client.service';
import { Client } from './../client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {
  clients: Client[]
  displayedColumns = ['name', 'whatsapp', 'fone', 'cpf', 'email', 'city', 'address', 'action'];

  constructor(private clientservice: ClientService) { this.clients = [] }

  ngOnInit(): void {
    this.clientservice.read().subscribe(clients=> {
      this.clients = clients
    })
  }
}
