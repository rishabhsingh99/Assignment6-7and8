import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

  public viewall():Observable<any>{
    return this.http.get("http://localhost:8082/springrest/viewall");
  }
  public viewbyid(eid:number):Observable<any>{
    return this.http.get("http://localhost:8082/springrest/viewbyid/"+eid);
  }
  public viewbydept(dname:string):Observable<any>{
    return this.http.get("http://localhost:8082/springrest/viewbydept/"+dname);
  }
  public addEmployee(emp:Emp):Observable<any>{
    return this.http.post("http://localhost:8082/springrest/add",emp,{responseType:'text'});
  }
  public editEmployee(emp:Emp):Observable<any>{
    return this.http.put("http://localhost:8082/springrest/edit",emp,{responseType:'text'});
  }
  public deleteEmployee(eid:number):Observable<any>{
    return this.http.delete("http://localhost:8082/springrest/remove/"+eid,{responseType:'text'});
  }
  public viewDepts():Observable<any>{
    return this.http.get("http://localhost:8082/springrest/viewdepts");
  }
}
