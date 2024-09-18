import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email:string=''
password:string=''

onSubmit(){
  if (this.email && this.password) {
    console.log('Form Submitted', {emai: this.email, password: this.password});
    
  } else{
    console.log('Please fill in all fields');
    
  }
}
}
