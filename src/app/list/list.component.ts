import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

formDataArray:any=[];


constructor(private listService:ListService){}

ngOnInit(): void {
  this.formDataArray = this.listService.getFormData()


}

}
