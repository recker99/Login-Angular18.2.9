import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { appConfig } from './app/app.config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage'; 

bootstrapApplication(AppComponent, {
  providers: [
    FormsModule, 
    ...appConfig.providers, provideFirebaseApp(() => initializeApp({"projectId":"retail-off-17317","appId":"1:1095701536404:web:dc9db6fd652aeb10189e81","storageBucket":"retail-off-17317.appspot.com","apiKey":"AIzaSyB0S-K8XXqkdn3Q4IN4_q70BaxWqMb1xzk","authDomain":"retail-off-17317.firebaseapp.com","messagingSenderId":"1095701536404","measurementId":"G-VXX4L3YV6F"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()) 
  ]
}).catch((err) => console.error(err));
