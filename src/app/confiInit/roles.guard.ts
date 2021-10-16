import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/comercio/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canActivate(): boolean {
    if ((this.authService.rolAdmin() === 'admin')) {
      return true;
    }
    this.router.navigate(['/publicacion']);
    return false;
  }
  
}
