import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(
    private router: Router
    , public authService: AuthService ) { }

  ngOnInit(): void {
  }

  // used in side the form tag 
  // Call this function when submit the button 
  // login(e){
  //   console.log("adsf asdf OK!");

  //   e.preventDefault();
  //   const target = e.target;    
  //   const name = target.querySelector('#nm').value;
  //   const password = target.querySelector('#ps').value;    

  //   if( name === password){
  //     //window.location.href = "task";
  //     console.log("asdf asdfasdf aserf OK.. ");
  //     this.router.navigateByUrl('task');
  //   }

  //   const response = this.authService.login(name, password);
  //   console.log("response", response);
  // }

  onClickLogin(){  
    const response = this.authService.login(this.username, this.password);
    alert(`response: ${response}`);
    console.log("response", response);    

    alert(response.message)
    if(response.status === 200 ){
      this.router.navigateByUrl('task');
      return;
    }

  }

}


