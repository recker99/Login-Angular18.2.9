import { Injectable } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';  
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userNameSource = new BehaviorSubject<string | null>(null);  
  userName$ = this.userNameSource.asObservable();

  constructor(private auth: Auth) { }

  register(username: string, email: string, password: string): Promise<void> {  
    return createUserWithEmailAndPassword(this.auth, email, password)  
      .then(userCredential => {  
        const user = userCredential.user;
        
        // Aquí actualizas el perfil de usuario con el nombre de usuario
        return updateProfile(user, { displayName: username }).then(() => {
          this.userNameSource.next(username);  // Actualiza el BehaviorSubject con el nombre
          console.log('Usuario registrado:', user);
        });
      });
  }

  login(email: string, password: string): Promise<void> {  
    return signInWithEmailAndPassword(this.auth, email, password)  
      .then(userCredential => {  
        const user = userCredential.user;
        const displayName = user.displayName || 'Usuario';  // Verifica si hay un nombre de usuario
        
        this.userNameSource.next(displayName);  // Actualiza el BehaviorSubject con el nombre de usuario
        console.log('Usuario logueado:', user);  
      });  
  } 
  
  logout(): Promise<void> {  
    return this.auth.signOut().then(() => {  
      this.userNameSource.next(null); // Limpiar el nombre de usuario al cerrar sesión  
      console.log('Usuario cerró sesión');  
    });  
  }  
  
  get currentUserName() {  
    return this.userNameSource.value;  
  }  
}
