import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenizeReq = req.clone({
      setHeaders: {
        authorization: `${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);

  }
}
