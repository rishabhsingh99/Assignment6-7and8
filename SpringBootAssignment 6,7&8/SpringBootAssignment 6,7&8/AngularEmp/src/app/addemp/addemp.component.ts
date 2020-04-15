import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';
import { Dept } from '../dept';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
emp:Emp=new Emp();
depts:Dept[]=[];
msg:string;
errorMsg:string;

  constructor(private empService:EmpService) { }

  ngOnInit() {
    this.empService.viewDepts().subscribe(data=>this.depts=data);
  }

  addEmp(){
    this.empService.addEmployee(this.emp).subscribe((data)=>{console.log("data",data);
                                this.msg=data;this.errorMsg=undefined;this.emp=new Emp()},
      error=>{this.errorMsg=error.error.message;this.msg=undefined});
      
  }
}
