import { Router, ActivatedRoute } from '@angular/router';
import { ProviderService } from './../provider.service';
import { Provider } from './../provider.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent implements OnInit {
  
  //@ts-ignore
  provider: Provider;

  constructor(private providerservice: ProviderService, 
              private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.providerservice.readById(id).subscribe(provider => {this.provider = provider});
  }

  updateProvider(): void {
    this.providerservice.update(this.provider).subscribe(() => { this.providerservice.showMessage('Fornecedor atualizado com sucesso!')})
    this.router.navigate(['/provider']);
  }

  cancel(): void {
    this.router.navigate(['/provider'])
  }

}
