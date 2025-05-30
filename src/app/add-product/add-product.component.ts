import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  product_title:string = "angular"
  product_details:any = ""
  product_image:any =""
  price:number= 0
  availability:boolean = true
  product_dimensions:any = ""
  category:string= ""
  todays_deals:boolean = false

constructor(private http: HttpClient, private router: Router, private forms: FormsModule){}


  addNewProduct(){
    this.http.post("http://localhost:4011/addProduct", { 
        productTitle: this.product_title,
        productImage: this.product_image,
        productDetails: this.product_details,
        price: this.price,
        category: this.category,
        availability: this.availability,
        todaysDeals: this.todays_deals,
        productDimensions: this.product_dimensions,
      }).subscribe( res => {
      
        if(res){
        alert("product has beenn added")
        this.router.navigate(['/admin']);
        }
        else{
          alert('There was an error')
        }
    })
  }

}
