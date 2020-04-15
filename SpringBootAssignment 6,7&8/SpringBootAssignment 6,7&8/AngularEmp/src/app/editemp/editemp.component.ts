import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Emp } from '../emp';
import { Dept } from '../dept';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
emp:Emp;
depts:Dept[]=[];
msg:string;
  constructor(private empService:EmpService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{let eid:number=parseInt(params.get("id"));
    this.empService.viewbyid(eid).subscribe(data=>this.emp=data);
  });

    this.empService.viewDepts().subscribe(data=>this.depts=data);

  }

  editEmp(){
    this.empService.editEmployee(this.emp).subscribe(data=>{alert(data);
    this.router.navigateByUrl("/getall")});
  }

}
