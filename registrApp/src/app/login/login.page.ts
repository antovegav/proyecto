import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  titulo : string = "Iniciar Sesión";

  usuarios : Array<any> = [
    {
      nombre: "Antonio Vega",
      email: "anto.vegav@duocuc.cl",
      password: "a123456"
    },
    {
      nombre: "Jorge Gonzalez",
      email: "jogonzalez@gmail.com",
      password: "a123456"
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}


