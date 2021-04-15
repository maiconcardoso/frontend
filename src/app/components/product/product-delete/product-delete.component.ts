import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  //@ts-ignore
  product: Product;

  constructor(private productservice: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //@ts-ignore
    this.productservice.readById(id).subscribe(product => {this.product = product});
  }

  deleteProduct(): void {
    this.productservice.delete(this.product).subscribe(() => {this.productservice.showMessage('Cliente excluído com sucesso!')})
    this.router.navigate(['/product'])
  }

  cancel(): void {
    this.router.navigate(['/product'])
  }

}
