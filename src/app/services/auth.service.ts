import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFOG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService;

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais){
    return this.http.post(`${API_CONFOG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successFullLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    if(token != null){
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  logout(){
    localStorage.clear();
  }
}