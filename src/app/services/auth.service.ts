import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afsAuth: AngularFireAuth
  ) { }

  login(email: string, password:string){
    return new Promise((resolve,reject)=>{
      this.afsAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err))
    });
  }
  getAuth(){
    return this.afsAuth.authState.pipe(auth => auth);
  }

  logout(){
    this.afsAuth.auth.signOut();
  }

  register(email:string, password:string){
    return new Promise((resolve,reject)=>{
      this.afsAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err))
    });
  }
}
