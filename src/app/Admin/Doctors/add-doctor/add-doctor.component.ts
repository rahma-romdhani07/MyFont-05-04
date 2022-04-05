import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig , MatDialogRef} from "@angular/material";
import { AllDoctorsComponent } from '../all-doctors/all-doctors.component';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
fileData: File = null;
 url : FileReader ;

  ngOnInit() {
   
       function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(event) {
              $('#imagePreview').css('background-image', 'url('+(<FileReader>event.target).result+')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]); } }
  $("#imageUpload").change(function() {
      readURL(this);
  });
    
  }
  constructor(private dialog: MatDialog , private dialogRef : MatDialogRef<AddDoctorComponent> ) {}
  
  onClear(){

 /*autre code */

    this.onClose();
 }
 onClose(){
   this.dialogRef.close();
 }
 
 
 
}