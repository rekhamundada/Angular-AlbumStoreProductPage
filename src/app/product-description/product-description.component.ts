import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
private id: number;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAlbum(this.id)
  }

}
