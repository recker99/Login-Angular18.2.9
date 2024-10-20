import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string | null = 'Usuario';

  constructor(private authService: AuthService, private router: Router) {
    // Suscribirse al observable del nombre de usuario
    this.authService.userName$.subscribe(name => {
      this.userName = name || 'Usuario';  // Si no hay nombre de usuario, muestra 'Usuario' por defecto
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
