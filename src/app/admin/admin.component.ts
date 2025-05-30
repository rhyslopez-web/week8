import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  products:any[] = []

  constructor(private http:HttpClient){

  }

    ngOnInit(): void {
      this.http.get<any>("http://localhost:4011/getProducts").subscribe(response =>{
        console.log(response)
        this.products = response
        console.log("This is your data: " + this.products)
      })

      
    }

}
