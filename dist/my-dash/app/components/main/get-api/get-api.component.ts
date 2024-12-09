import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
filterObj={

  "title": "",
  "category": "",
}
 


 userList: any[]=[];

 ngOnInit(): void {
  this.getAllUser();
}

  constructor(private http:HttpClient){

  }

  getAllUser(){
    
    this.http.get("https://fakestoreapi.com/products").subscribe((res:any)=>{
      this.userList = res;
    })

    
  }

  // filterProd(){

  // this.filterProd.value === this.userList
  // }

}
