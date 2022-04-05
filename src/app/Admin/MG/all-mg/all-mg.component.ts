import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { EditMGComponent } from '../edit-mg/edit-mg.component';
export interface Doctor {
  id: number;
  image:string ;
  name: string;
  email: string;
  numero: string;
  adresse:string ;
  date:string;
}

@Component({
  selector: 'app-all-mg',
  templateUrl: './all-mg.component.html',
  styleUrls: ['./all-mg.component.css']
})
export class AllMGComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  images:string[]=[
    './assets/doctors/d1.jpg',
    './assets/doctors/d1.png',
    './assets/doctors/d2.jpg',
    './assets/doctors/d2.png',
    './assets/doctors/d3.jpg',
    './assets/doctors/d4.jpg',
    './assets/doctors/d5.jpg',
    './assets/doctors/d6.jpg',
    './assets/doctors/d1.jpg',
   ]
    doctors : Doctor[]=[
      {id:1 ,image:this.images[1], name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
      {id:2 ,image:this.images[2],  name:'Sarah Smith',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
      {id:3 ,image:this.images[3], name:'Cara Stevens',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
      {id:4 ,image:this.images[4], name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
     
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
      /////////***********/ */
    })
}

openDialog() {
  this.dialog.open(EditMGComponent);
}
}