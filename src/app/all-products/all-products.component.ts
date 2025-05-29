import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  imports: [CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

  products:any[] = []

  constructor(private http:HttpClient){

  }

    ngOnInit(): void {
      this.http.get<any>("http://localhost:4011/getProducts").subscribe(response =>{
        console.log(response)
        this.products = response
        // console.log("This is your data: " + this.products)
      })

      
    }

    

}
