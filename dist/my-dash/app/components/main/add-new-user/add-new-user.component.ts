import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  imports: [FormsModule],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css'
})
export class AddNewUserComponent implements OnInit {


  newUser = { name: '', discription: '' };
      
  // Array to hold all users
  users: Array<{ name: string;  discription:string }> = [];



      deptObj:any = {
    
          "id":0,
          "title":"",
          "price":"",
          "category:":"",
          "description":"",
          "image":''
    
      };
  

      deptList :any[]=
        [{
          
        }]
      ;

      http = inject(HttpClient);

      ngOnInit(): void {
        this.getDepartment();
      }
    


      onSave(){

     

        debugger
      
        // Method to add a user to the table 
          if (this.newUser.name && this.newUser.discription) {
            // Add the user to the array
            this.users.push({ ...this.newUser });
            alert("Created")
            // Reset the input fields
            this.newUser = { name: '', discription:'' };
          } else {
            alert('Both fields are required!');
          }
 

     
        // this.http.post(this.addDatatable, this.deptObj).subscribe((res:any)=>{
        //   debugger
        //   if(res=res){
        //     alert("Created");
        //   }else{
        //     alert(res.message)
        //   }
        // })
      }

      getDepartment(){

        this.http.get("https://fakestoreapi.com/products").subscribe((res:any)=>{
            this.deptList = res;
        })
      }

}
