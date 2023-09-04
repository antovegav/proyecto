import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ListuserService {

  private userList: UserModel[] =  [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      userType: 'estudiante',
      username: 'juanperez',
      password: 'password1',
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      userType: 'estudiante',
      username: 'mariagonzalez',
      password: 'password2',
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Sánchez',
      userType: 'profesor',
      username: 'pedrosanchez',
      password: 'password3',
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'Martínez',
      userType: 'profesor',
      username: 'anamartinez',
      password: 'password4',
    },
  ];


  addUser(user: UserModel) {
    this.userList.push(user);
  }

  getUserList() {
    return this.userList;
  }
}
