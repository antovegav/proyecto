import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IUserLogin } from '../models/IUserLogin';

@Component({
  selector: 'app-password-olvidado',
  templateUrl: './password-olvidado.page.html',
  styleUrls: ['./password-olvidado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PasswordOlvidadoPage implements OnInit {

  userolvidopasswordModal = {
    username: '',
  };
  constructor() { }

  ngOnInit() {
  }



  userolvidopasswordModalRestart(): void {
    this.userolvidopasswordModal.username = '';
  }

}
