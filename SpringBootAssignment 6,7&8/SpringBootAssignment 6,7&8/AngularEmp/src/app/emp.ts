import { Dept } from './dept';

export class Emp {
    empId:number;
    empName:string;
    empSal:number;
    dept:Dept=new Dept();
    doj:string;
    strdoj:string;
}
