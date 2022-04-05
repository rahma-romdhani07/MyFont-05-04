import { Component, OnInit } from '@angular/core';
//import * as echarts from 'echarts';
@Component({
  selector: 'app-profil-doctor',
  templateUrl: './profil-doctor.component.html',
  styleUrls: ['./profil-doctor.component.css']
})
export class ProfilDoctorComponent implements OnInit {
test : boolean =true;
test5 : boolean =true;
test2 : boolean =true;
test3 : boolean =true;
test4 : boolean =true;

  constructor() { }
 
  ngOnInit() {
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
   
   }

 toggleBilling() {
 (document.getElementById('BenchForcastId_'+'prenom') as HTMLButtonElement).disabled = true;

  }
  testIcone1(){
    this.test=false;
  }
  testIcone2(){
    this.test2=false;
  }testIcone3(){
    this.test3=false;
  }testIcone4(){
    this.test4=false;
  }testIcone5(){
    this.test5=false;
  }
}

