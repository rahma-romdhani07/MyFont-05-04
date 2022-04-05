import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export interface IA_Model {
  id: number;
  nom:string ;
  date_ajout:string;
  date_debut:string;
  date_fin: string;
}
@Component({
  selector: 'app-all-ia',
  templateUrl: './all-ia.component.html',
  styleUrls: ['./all-ia.component.css']
})
export class AllIAComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

    modeles : IA_Model[]=[
      {id:1 , nom:'Modele 1 ',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:2 , nom:'Modele 2',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:3 , nom:'Modele 3',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:4 , nom:'Modele 4',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:5 , nom:'Modele 5',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:6 , nom:'Modele 6',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:7 , nom:'Modele 7',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      

   ]
   delete(){
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "de supprimer Modéle IA  : Nom de Modéle  !",
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

}
}