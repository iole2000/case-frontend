import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',


  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor(private authService: AuthService){}
  ngOnInit(): void {
   
  }
onSubmit(form: NgForm) {
  const telefono=form.value.telefono;
  const cognome=form.value.cognome;
  const nome=form.value.nome;
  const email = form.value.email;
  const password = form.value.password;
  this.authService.signUp(telefono,cognome,nome,email, password).subscribe(data => {
    console.log(data);
  });
  form.reset();
}
}
