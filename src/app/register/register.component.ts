import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../list.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form:FormGroup;
  selectedGender :string=''
  constructor(private fb:FormBuilder,private listService:ListService){
    this.form= this.fb.group({
      country:['',Validators.required],
      gender:['', Validators.required]
    })
  
  }
  formData:any;

  

  ngOnInit(): void {
    this.formData = this.listService.getFormData()
  }

name:string=''
date:string=''
uname:string=''
mail:string=''
pswd:string=''
pswd2:string=''
bio:string=''
num:string=''
gender:string=''


refreshPage() {
  window.location.reload();
}
formDataArray:any[]=[]

finalSubmit(){
  if (this.name && this.uname && this.mail && this.pswd == this.pswd2 && this.bio && this.num && this.date && this.gender) {

    const formData={
      name:this.name,
      email:this.mail,
      gender:this.gender,
      phone:this.num
    }
    
    this.formDataArray.push(formData)
    this.listService.setFormData(formData)
    
    // this.router.navigate(['/list'])
    alert('Registration completed')
  }else{
    alert('Somthing went wrong')
  }
}



}

