import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { HttpClientService } from './service/httpclient.service';
export class Patient {
  constructor(
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public email: string,
    public address: string,
  ) {}
}

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    AddPatientComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
