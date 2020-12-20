import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyProduct, MyProductType } from 'src/app/shared/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editform-products',
  templateUrl: './editform-products.component.html',
  styleUrls: ['./editform-products.component.css']
})
export class EditformProductsComponent implements OnInit {

  @Input() changingProduct: MyProduct;
  @Input() showForm = false;

  changeForm: FormGroup;
  myProductType = MyProductType;
  type: MyProductType;
  checkNum = /^[+,0-9]+$/;

  @Output() editProduct = new EventEmitter<MyProduct>(); 

  
  constructor() { 
  }
  
  ngOnInit(): void {
    this.changeForm = new FormGroup
    ({
      name: new FormControl(this.changingProduct.name,[Validators.required,]),
      type: new FormControl(this.changingProduct.type),
      sum: new FormControl(this.changingProduct.sum,[Validators.pattern(this.checkNum), Validators.required,]),
      cost: new FormControl(this.changingProduct.cost,[Validators.pattern(this.checkNum), Validators.required,]),
      date: new FormControl(this.changingProduct.date,[Validators.required,])
    });
    document.getElementsByTagName("dialog")[0].showModal();
  }
  
  onEditProduct() {
    this.changingProduct.name = (<HTMLInputElement>document.getElementById("inputName")).value;
    this.changingProduct.type = parseInt((<HTMLInputElement>document.getElementById("selectType")).value);
    this.changingProduct.sum = parseInt((<HTMLInputElement>document.getElementById("inputSum")).value);
    this.changingProduct.date = (<HTMLInputElement>document.getElementById("inputDate")).value;
    this.changingProduct.cost = parseInt((<HTMLInputElement>document.getElementById("inputCost")).value);
      
    this.editProduct.emit(this.changingProduct);
  }

}
