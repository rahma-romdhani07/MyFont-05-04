import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import{MatDialog , MatDialogConfig} from '@angular/material'
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import Swal from 'sweetalert2/dist/sweetalert2.min.js'
import { EditDoctorComponent } from '../edit-doctor/edit-doctor.component';


export interface Doctor {
  id: number;
  image:string ;
  name: string;
  email: string;
  numero: string;
  adresse:string ;
  date:string;
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent   implements OnInit {
  searche="";
  tab : Doctor[];

  ngOnInit(
    
  ){

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
     {id:5 , image:this.images[5],name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
     {id:6 ,image:this.images[6], name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
     {id:7 ,image:this.images[7], name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
     {id:8 ,image:this.images[8], name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
     {id:9 ,image:this.images[3], name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
     {id:10 ,image:this.images[1], name:'John Dao',email:'test@email.com',numero:'12345678',adresse:'Sousse',date:'2021/03/1/29'},
  ]
 
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddDoctorComponent, {
      width: '250px',

     } );
  
  }

  openDialog2() {
    this.dialog.open(EditDoctorComponent);
  }
  
 
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
  rechercheA(){
 
   
  this.tab= this.filtrerA(this.searche)}
  
  filtrerA(sousChaine:string){
 
  return this.doctors.filter((liste)=>
  liste.adresse.toLowerCase().includes(this.searche.toLowerCase()))
  
  }
}