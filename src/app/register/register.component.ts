import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
name:string=''
date:string=''
uname:string=''
mail:string=''
pswd:string=''
pswd2:string=''

onSubmit(){
  if (this.pswd == this.pswd2) {
    console.log('Form Submitted');
    
  } else{
    console.log('Please fill in all fields');
    
  }
}
}
