import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyProduct } from 'src/app/shared/product.model';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {
  @Input() title: string;
  @Input() products: MyProduct[] = [];
  constructor() { }
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() changeProduct = new EventEmitter<MyProduct>();

  ngOnInit(): void {
  }

  onDeleteProduct(id: number) {
    this.deleteProduct.emit(id);
  }

  onChangeProduct(product){
    this.changeProduct.emit(product);
  }
}
