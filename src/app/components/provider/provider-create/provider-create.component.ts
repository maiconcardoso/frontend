import { ProviderService } from './../provider.service';
import { Provider } from './../provider.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.css']
})
export class ProviderCreateComponent implements OnInit {

  provider: Provider = {
    name: '',
     //@ts-ignore
    whatsapp: null,
     //@ts-ignore
    fone: null,
     //@ts-ignore
    cnpj?: null,
    email: '',
    city: '',
    address: '',
     //@ts-ignore
    cep: null
  }

  constructor(private router: Router, private providerservice: ProviderService) { }

  ngOnInit(): void {
  }

  createProvider(): void {
    this.providerservice.create(this.provider).subscribe(() => {
      this.providerservice.showMessage('Fornecedor cadastrado com sucesso!')
      this.router.navigate(['/provider'])
    })
  }

  cancel(): void{
    this.router.navigate(['/provider'])
  }

}
