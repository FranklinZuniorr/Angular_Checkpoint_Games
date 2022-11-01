import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public cadastroLogin = 1;

  ttt(x:number){
      if (x == 0){
        this.cadastroLogin = 0;
      }

       else if (x == 1){
        this.cadastroLogin = 1;

      };
  };

  

  constructor() { 
  
    
   
  }

  ngOnInit(): void {


  }

  userModel = new User();

  receberDados(){
    console.log(this.userModel);
    alert(this.userModel.email)
    alert(this.userModel.password)
     
  }

}




