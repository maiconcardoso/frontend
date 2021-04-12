import { ProviderService } from './../provider.service';
import { Provider } from './../provider.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-read',
  templateUrl: './provider-read.component.html',
  styleUrls: ['./provider-read.component.css']
})
export class ProviderReadComponent implements OnInit {

  providers: Provider[]
  displayedColumns = ['id' ,'name', 'whatsapp', 'fone', 'cnpj', 'email', 'city', 'address', 'cep' , 'action']

  constructor(private providerservice: ProviderService) { this.providers = [] }

  ngOnInit(): void {
    this.providerservice.read().subscribe(providers => {
      this.providers = providers
    })
  }
}
