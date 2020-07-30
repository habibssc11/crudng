import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crudng';

  constructor(private authService: AuthService, private router: Router ){}

  ngOnInit(){
    if(this.authService.isUserloggedIn()){
      this.router.navigate(['/task']);
    }
  }


}
