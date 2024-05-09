import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cAPIkey='AIzaSyCD_q_pzAylrWaOB30t3K7F9MKTBoBZwo'
  // signUpUrl=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIkey}`
  signInUrl='http://localhost:8080/auth/login';
  params!: HttpParams;
   headers!: HttpHeaders;
  isLoggedIn!: true;
   isAdmin!: true;
   private apiLogin='http://localhost:8080/login';
private REGISTRA = 'http://localhost:8080/nuovoUtente';
constructor(private http :HttpClient){}

signUp  (email:string, password: string,nome:string, numero:number, cognome:string): Observable<Object> {
  this.headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
     'responseType': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:4200/',
  });

  this.params = new HttpParams().set('email', email).set('password', password).set('nome', nome).set('cognome', cognome).set('numero', numero);
  return this.http.post<Object> (this.REGISTRA,  { headers: this.headers });
}
 
signIn(email:string, password: string): Observable<Object> {
  this.headers = new HttpHeaders({
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'ResponseType': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:4200/',    });
       this.params = new HttpParams().set('email', email).set('password', password)
       return this.http.post<Object> (this.apiLogin,  { headers: this.headers,params: this.params });
 }
isRoleAdmin() {
      return this.isAdmin;
    }
  
  isAuthenticated(){
      return this.isLoggedIn;
   }
}
