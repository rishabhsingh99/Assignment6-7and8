import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  employees:Emp[]=[];
  msg:string;
  constructor(private empService:EmpService) { }

  ngOnInit() {
    this.empService.viewall().subscribe(data=>this.employees=data);
  }

deleteById(eid:number){
  this.empService.deleteEmployee(eid).subscribe(data=>{this.msg=data + "for id"+eid;
   this.empService.viewall().subscribe(data=>this.employees=data);});
}
}
