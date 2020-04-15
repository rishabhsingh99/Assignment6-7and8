import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-viewbyid',
  templateUrl: './viewbyid.component.html',
  styleUrls: ['./viewbyid.component.css']
})
export class ViewbyidComponent implements OnInit {

  eid:number;
  emp:Emp=null;
  msg:string;
  constructor(private empService:EmpService) { }

  ngOnInit() {
  }

  searchById(){
    this.empService.viewbyid(this.eid).subscribe(data=>{this.emp=data,this.msg=undefined},
    error=>{console.log(error);this.msg=error.error.message;this.emp=null});
  }
}
