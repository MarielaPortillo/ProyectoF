import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/comercio/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService]
})
export class MenuComponent implements OnInit {

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    
  }
  
login() {

  if (this.authService.loggedIn() === true) {
    return true; 
  }
}
logout() {
  this.authService.logout()
}

}
