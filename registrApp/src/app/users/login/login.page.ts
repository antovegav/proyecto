import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { IUserLogin } from 'src/app/models/IUserLogin';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  userLoginModal = {
    username: '',
    password: '',
  };

    listUser: UserModel[] = [
      {
        id: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        userType: 'estudiante',
        username: 'juanperez',
        password: 'password1',
        nacimiento: '1999-01-01',
        correo: 'juperez@duocuc.cl',
      },
      {
        id: 2,
        nombre: 'María',
        apellido: 'González',
        userType: 'estudiante',
        username: 'mariagonzalez',
        password: 'password2',
        nacimiento: '1995-06-12',
        correo: "agonzalez@duocuc.cl",
      },
      {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Sánchez',
        userType: 'profesor',
        username: 'pedrosanchez',
        password: 'password3',
        nacimiento: undefined,
        correo: "pesanchez@profesor.duoc.cl",
      },
      {
        id: 4,
        nombre: 'Ana',
        apellido: 'Martínez',
        userType: 'profesor',
        username: 'anamartinez',
        password: 'password4',
        nacimiento: undefined,
      correo: "amartinez@profesor.duoc.cl",
      },
    ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToInicio (){
    this.router.navigate(['/inicio']);
  }

  goToPassworOlvidado (){
    this.router.navigate(['/password-olvidado']);
  }


  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]

          }
        }
        if(this.listUser[i].userType == 'estudiante'){
          console.log("Ingresando...");
          let sendInfo = this.router.navigate(['/estudiante'], userInfoSend);
          return true;
        }else{
          console.log("redireccionando a profesor");
          let sendInfo = this.router.navigate(['/profesor'], userInfoSend);
          return true;
        }

      }
    }
    this.userLoginModalRestart();
    return false;

  }

  userLoginModalRestart(): void {
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }


}
