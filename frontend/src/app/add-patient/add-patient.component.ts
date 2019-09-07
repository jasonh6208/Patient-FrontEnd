// import { Patient } from './../service/httpclient.service';
// import { Component, OnInit } from '@angular/core';
// import { HttpClientService, Patient } from '../service/httpclient.service';

// @Component({
//   selector: 'app-add-patient',
//   templateUrl: './add-patient.component.html',
//   styleUrls: ['./add-patient.component.css']
// })
// export class AddPatientComponent implements OnInit {

//   user: Patient = new Patient( '', '', '', '', '');

//   constructor(
//     private httpClientService: HttpClientService
//   ) { }

//   ngOnInit() {
//   }

//   createPatient(): void {
//     this.httpClientService.createPatient(this.user)
//         .subscribe( data => {
//           alert('Patient created successfully.');
//         });

//   }

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClientService } from '../service/httpclient.service';
import { Patient } from '../app.module';

@Component({
  templateUrl: './add-patient.component.html'
})
export class AddPatientComponent {

  user: Patient = new Patient('', '', '', '', '');

  constructor(private router: Router, private httpClientService: HttpClientService) {

  }

  createPatient(): void {
    this.httpClientService.createPatient(this.user)
        .subscribe( data => {
          alert('User created successfully.');
        });

  }

}

