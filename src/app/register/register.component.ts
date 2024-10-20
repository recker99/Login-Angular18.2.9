import { Component } from '@angular/core';  
import { Router } from '@angular/router';  
import { AuthService } from '../services/auth.service';   

import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  

@Component({  
  selector: 'app-register',
  templateUrl: './register.component.html',  
  styleUrls: ['./register.component.css'],   
  standalone: true,  
  imports: [CommonModule, FormsModule],  
})  
export class RegisterComponent {  
  email: string = '';  
  password: string = '';    
  username: string = '';  
  errorMessage: string | null = null;  
    

  constructor(private authService: AuthService, private router: Router) {}  

    
  onRegister() {  
    this.errorMessage = null;  

    // Valida que todos los campos estén llenos  
    if (this.username && this.email && this.password) {  
      this.authService.register(this.username, this.email, this.password)  
        .then(() => {  
          console.log('Registro exitoso');  
          this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión  
        })  
        .catch(error => {  
          this.errorMessage = error.message; // Muestra el mensaje de error  
          console.error('Error en el registro:', error);  
        });  
      } else {  
        this.errorMessage = 'Todos los campos son requeridos.';  
      }  
   
    }  

  navigateToLogin() {  
    this.router.navigate(['/login']);  
  }  
}