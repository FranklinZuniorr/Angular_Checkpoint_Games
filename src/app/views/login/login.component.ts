import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

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
        this.sstatus = "Status... Ok.";
        this.corStatus = "white";
      }

       else if (x == 1){
        this.cadastroLogin = 1;
        this.sstatus = "Status... Ok."; 
        this.corStatus = "white";   
      };
  };

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {}

  userModel = new User();
  sstatus = "Status... Ok.";
  corStatus = "white";
  anim:string = "fadeee 1s forwards";

  receberDados(x:any){
    if(x == 1){
    this.loginService.url = "http://localhost:3000/users";
    this.loginService.login(this.userModel).subscribe((response) => {
      console.log(response);
      this.corStatus = "rgb(0, 255, 0)";
      if(response.statusText == "Created"){
      this.sstatus = "Usuário cadastrado com sucesso!"; 
      }
    }, (erro) => { 
      this.corStatus = "rgb(255, 32, 77)";
      if(erro.error == "Email already exists"){
      this.sstatus = "E-mail já existe";
      }
      else if(erro.error == "Email format is invalid"){
      this.sstatus = "O formato do e-mail é inválido";
      }
      else if(erro.error == "Password is too short"){
      this.sstatus = "A senha é muito curta";
      }
      else if(erro.error == "Email and password are required"){
      this.sstatus =  "E-mail e senha são obrigatórios";
      }
    })}

    else if(x == 0){
      this.loginService.url = "http://localhost:3000/login";
      this.loginService.login(this.userModel).subscribe((response) => {
        console.log(response);
        this.corStatus = "rgb(0, 255, 0)";
        if(response.statusText == "OK"){
        this.sstatus = "Login efetuado com sucesso!";
        }
      }, (erro) => { 
        this.corStatus = "rgb(255, 32, 77)";
        if(erro.error == "Email already exists"){
        this.sstatus = "E-mail já existe";
        }
        else if(erro.error == "Email format is invalid"){
        this.sstatus = "O formato do e-mail é inválido";
        }
        else if(erro.error == "Password is too short"){
        this.sstatus = "A senha é muito curta";
        }
        else if(erro.error == "Email and password are required"){
        this.sstatus =  "E-mail e senha são obrigatórios";
        }
        else if(erro.error == "Incorrect password"){
        this.sstatus = "Senha incorreta";
        }
        else if(erro.error == "Cannot find user"){
        this.sstatus = "Não foi possível encontrar o usuário";
        }
      })}
}

}






