import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    // @ts-ignore
    cod: null,
    // @ts-ignore
    amount: null,
    // @ts-ignore
    price: null,
    brand: '',
    modelMotor: ''
  }

  constructor(private router: Router, private productservice: ProductService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productservice.create(this.product).subscribe(() => {
      this.productservice.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/product'])
    })
  }

  cancel(): void {
    this.router.navigate(['/product'])
  }

}
