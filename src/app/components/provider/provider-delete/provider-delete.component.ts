import { Router, ActivatedRoute } from '@angular/router';
import { ProviderService } from './../provider.service';
import { Provider } from './../provider.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-delete',
  templateUrl: './provider-delete.component.html',
  styleUrls: ['./provider-delete.component.css']
})
export class ProviderDeleteComponent implements OnInit {

  //@ts-ignore
  provider: Provider;

  constructor(private providerservice: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.providerservice.readById(id).subscribe(provider => {this.provider = provider})

  }

  deleteProvider(): void {
    this.providerservice.delete(this.provider).subscribe(() => {this.providerservice.showMessage('Fornecedor excluído com sucesso!')})
    this.router.navigate(['/provider'])
  }

  cancel(): void {
    this.router.navigate(['/provider'])
  }

}
