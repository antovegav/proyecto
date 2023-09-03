import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  // ARREGLO CON LAS PAGINAS QUE SE MOSTRARAN EN EL MENU
  public appPages = [
    { title: 'Inicio', url: '/folder/RegistrApp', icon: 'home' },
    { title: 'Asistencia', url: '/folder/Asistencia', icon: 'list' },
    { title: 'Codigo QR', url: '/folder/Codigo QR', icon: 'qr-code' },
    { title: 'Editar Usuario', url: '/folder/Editar Usuario', icon: 'person-circle' },
    { title: 'Ingresar', url: 'login', icon: 'log-in' },
  ];

  // ARREGLO DE LAS ETIQUETAS QUE SE MOSTRARAN EN EL MENU
  constructor() {}
}
