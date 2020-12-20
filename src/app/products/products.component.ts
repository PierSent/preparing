import { Component, OnInit } from '@angular/core';
import { MyProduct, MyProductType } from '../shared/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : MyProduct[];
  MyProductType = MyProductType;
  changingProduct: MyProduct;
  showForm = false;
  
  
  constructor(private base: ProductService) { 
    this.getData();
  }
  
  ngOnInit(): void {
  }
  
  getByType(type: number){
    return this.products.filter((product) => product.type === type);
  }
  
  async onAddProduct(product) {
    try {
      await this.base.addProduct(product);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }

  }

  async onDeleteById(id: number) {
    try {
      await this.base.deleteProduct(id);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }

  onChangeProduct(product) {
    this.changingProduct = product;
    this.showForm = true;
    console.log(this.showForm);
  }

  async onEditProduct(product){
    try {
      this.showForm = false;
      await this.base.changeProduct(product);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }
  
  async getData() {
    try {
      this.products = await this.base.getProducts();
    } catch (err) {
      console.error(err);
    }
  }
}
