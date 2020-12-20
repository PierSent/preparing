import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { MyProduct, MyProductType } from 'src/app/shared/product.model';

@Component({
  selector: 'app-addform-products',
  templateUrl: './addform-products.component.html',
  styleUrls: ['./addform-products.component.css']
})
export class AddformProductsComponent implements OnInit {

  name: string;
  sum: number;
  cost: number;
  date: string;
  type = 1;
  myProductType = MyProductType;
  
  checkNum = /^[+,0-9]+$/;

  formProducts: FormGroup;

  @Output() addProduct = new EventEmitter<MyProduct>(); 

  constructor() { }

  ngOnInit(): void 
  {  
    this.formProducts = new FormGroup
    ({
      name: new FormControl('',[Validators.required,]),
      sum: new FormControl('',[Validators.pattern(this.checkNum), Validators.required,]),
      cost: new FormControl('',[Validators.pattern(this.checkNum), Validators.required,]),
      date: new FormControl('',[Validators.required,])
    });
  }

  onAddProduct() {
    this.addProduct.emit({
      name: this.formProducts.value.name,
      type: this.type,
      sum: this.formProducts.value.sum,
      cost: this.formProducts.value.cost,
      date: this.formProducts.value.date
    });
  }
}
