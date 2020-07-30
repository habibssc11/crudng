import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string){
    if( username == password){
      //window.location.href = "task";
      //this.router.navigateByUrl('task');
      this.setSession(username);
      return {
        status: 200, message: "Login success!"
      }
    }else{
      return {
        status: 201, message: "Username or password is incorrect!"
      }
    }
  }

  setSession(name: string){
    const user = {name: name}
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem('user');
  }

  isUserloggedIn(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user != null;
  }

}
