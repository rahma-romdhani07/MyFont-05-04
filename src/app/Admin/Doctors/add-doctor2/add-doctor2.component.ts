import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor2',
  templateUrl: './add-doctor2.component.html',
  styleUrls: ['./add-doctor2.component.css']
})
export class AddDoctor2Component implements OnInit {

  constructor() { }

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

}
