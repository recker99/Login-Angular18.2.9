import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    
    this.authService.login(this.email, this.password)  
      .then(() => {  
        this.errorMessage = null; // Reinicia el mensaje de error  
        console.log('Inicio de sesión exitoso');  
        // Redirigir a home  
        this.router.navigate(['/home']); 
      })  
      .catch(error => {  
        this.errorMessage = error.message;  
        console.error('Error de inicio de sesión', error);  
      });  
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
