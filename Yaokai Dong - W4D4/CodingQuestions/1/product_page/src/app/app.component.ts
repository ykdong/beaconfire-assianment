import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product_page';
  constructor() {} // imports no module and data from other module or parent component, leave this as blank
  
  // product table data
  products: Product[] = [
    {
      name: 'M&M',
      category: 'Snacks',
      price: 1.99
    },
    {
      name: 'Table',
      category: 'Furniture',
      price: 199
    },
    {
      name: 'Kale',
      category: 'Vegetables',
      price: 2.49
    }
  ];
  product_name: string = '';
  product_category: string = '';
  product_price: number = 0;
  
  add() {
    const name: string = this.product_name;
    const category: string = this.product_category;
    const price: number = this.product_price;
    this.products.push({name, category, price});
  };
  delete(name: string) {
    const index = this.products.findIndex(product => product.name === name);
    this.products.splice(index, 1);
  }
}
