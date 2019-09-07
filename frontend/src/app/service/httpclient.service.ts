import { Patient } from './../app.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }
     getPatients() {
    console.log('test call');
    return this.httpClient.get<Patient[]>('http://localhost:8080/patients/list');
  }

  public createPatient(patient: Patient) {
    return this.httpClient.post('http://localhost:8080/patients/save', JSON.parse(JSON.stringify(patient)) );
  }

}
