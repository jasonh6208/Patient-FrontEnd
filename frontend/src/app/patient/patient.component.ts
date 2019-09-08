import { Patient } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getPatients().subscribe(
     response => { this.patients = response; }
    );
  }

}
