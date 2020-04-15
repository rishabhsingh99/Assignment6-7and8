import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewallComponent } from './viewall/viewall.component';
import { ViewbyidComponent } from './viewbyid/viewbyid.component';
import { ViewbydeptComponent } from './viewbydept/viewbydept.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';

const routes: Routes = [
{path:'getall',component:ViewallComponent},
{path:'getbyid',component:ViewbyidComponent},
{path:'getbydept',component:ViewbydeptComponent},
{path:'addemployee',component:AddempComponent},
{path:'editemployee/:id',component:EditempComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
