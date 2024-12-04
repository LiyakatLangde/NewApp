
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule} from '@angular/forms'
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports:[FormsModule]
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName:'',
    password:'',
    emailId:'',
  }
  userLogin: any ={
    userName:'',
    password:'',
  }

  router = inject(Router);


  onRegister(){

      const isLocalData = localStorage.getItem("angular18Local");
      if (isLocalData){
        const localArray = JSON.parse(isLocalData);
        alert("Register Success");
      } else{
        const localArray = [];
        localArray.push(this.userRegisterObj);
        localStorage.setItem("angular18Local",JSON.stringify(localArray))
        alert("Register Success1");
      }
   
  }

  onLogin(){
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData !== null){
      const users = JSON.parse(isLocalData);
      const isUserFound = users.find((m:any) => m.emailId == this.userLogin.emailId && m.password == this.userLogin.password);
      
      if(isUserFound !== undefined){
        this.router.navigateByUrl('main-layout/home-page')
      } else{
        alert("User Inncorrect !!!")
      }
    }
      else{
        alert("No User Found")
      }
      
    }
  }

