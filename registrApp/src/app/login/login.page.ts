import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from '../models/UserModel';
import { UserLogin } from '../models/UserLogin';
import { NavigationExtras, Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class LoginPage implements OnInit {

  titulo : string = "Iniciar Sesión";

  // LISTA DE USUARIOS
  usuarios : UserModel[] = [
    // ALUMNO
    new UserModel("ALUMNO","19.972.633-1", "Antonio", "Vega", new Date("1998-05-12"), "anto.vegav@duocuc.cl", "anto1234"),
    // PROFESOR
    new UserModel("PROFESOR","12.745.654-K", "Juan", "Perez", undefined, "juperez@gmail.com", "juan1234"),
  ];

  // LOGIN DEL USUARIO
  userLogin: UserLogin = {
    email: "",
    password: ""
  };




  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginRestart();
  }

  usersLogin(userLoginInfo:UserLogin): boolean{
    for(let i = 0; i < this.usuarios.length; i++){
      if((this.usuarios[i].email == userLoginInfo.email) && (this.usuarios[i].password == userLoginInfo.password)){
        console.log("Ingresando...", this.userLogin.email, this.userLogin.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.usuarios[i]
          }
        }
        if(this.usuarios[i].type == "ALUMNO"){
          let sendInfo = this.route.navigate(['/alumno'], userInfoSend);
        }else{
          let sendInfo = this.route.navigate(['/profesor'], userInfoSend);
        }
      }
    }
    this.userLoginRestart();
    return false;
  }
  userLoginRestart(): void{ 
    this.userLogin.email = "";
    this.userLogin.password = "";
  }
}



