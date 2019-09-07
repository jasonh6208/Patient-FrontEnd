import { AddPatientComponent } from './add-patient/add-patient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {path: 'patient/list', component: PatientComponent },
  {path: '', component: AddPatientComponent },
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
