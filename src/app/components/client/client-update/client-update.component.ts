import { Client } from './../client.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  //@ts-ignore
  client: Client;

  constructor(private clientservice: ClientService, private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.clientservice.readById(id).subscribe(client => {this.client = client})
  }

  updateClient(): void {
    this.clientservice.update(this.client).subscribe(() => { this.clientservice.showMessage('Cliente atualizado com sucesso!')})
    this.router.navigate(['/client']);
  }

  cancel(): void {
    this.router.navigate(['/client'])
  }

}
