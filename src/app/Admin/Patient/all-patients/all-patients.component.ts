import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { EditPatientComponent } from '../edit-patient/edit-patient.component';

export interface Doctor {
  id: number;
  image:string ;
  nom: string;
  prenom:string;
  email: string;
  numero: string;
  date:string;
}
@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  images:string[]=[
    './assets/imagesD/faces/face1.jpg',
    './assets/imagesD/faces/face10.jpg',
    './assets/imagesD/faces/face14.jpg',
    './assets/imagesD/faces/face15.jpg',
    './assets/imagesD/faces/face16.jpg',
    './assets/imagesD/faces/face19.jpg',
    './assets/imagesD/faces/face21.jpg',
    './assets/imagesD/faces/face23.jpg',
    './assets/imagesD/faces/face1.jpg',
   ]
    doctors : Doctor[]=[
      {id:1 ,image:this.images[1], nom:'John ',prenom:'smith',email:'test@email.com',numero:'12345678',date:'2021/03/1/29'},
      {id:2 ,image:this.images[2], nom:'John ',prenom:'smith',email:'test@email.com',numero:'12345678',date:'2021/03/1/29'},
      {id:3 ,image:this.images[3], nom:'John ',prenom:'smith',email:'test@email.com',numero:'12345678',date:'2021/03/1/29'},
      {id:4, image:this.images[4], nom:'John ',prenom:'smith',email:'test@email.com',numero:'12345678',date:'2021/03/1/29'},
      {id:5,image:this.images[5], nom:'John ',prenom:'smith',email:'test@email.com',numero:'12345678',date:'2021/03/1/29'},
      {id:6,image:this.images[6], nom:'John ',prenom:'smith',email:'test@email.com',numero:'12345678',date:'2021/03/1/29'},

   ]
   delete(){
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "de supprimer patient : Rahma Romdhani !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé !',
          'Patient a été supprimé.',
          'success'
        )
      }
    })
  }
   details(){
    Swal.fire({
      background: '#1A202E',
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
      
    })
}
openDialog() {
  this.dialog.open(EditPatientComponent);
}
}