import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productId: string=""
  productDetails: any=[]
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(){
    this.productId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.productId)


    this.http.get<any>("http://localhost:4011/getProductById/" + this.productId).subscribe(response =>{
      console.log(response)
    this.productDetails = response[0]
    })
  }
}
