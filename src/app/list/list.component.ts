import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
formData:any;
constructor(private listService:ListService){}

ngOnInit(): void {
  this.formData = this.listService.getFormData()
}

}
