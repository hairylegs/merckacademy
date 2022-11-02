import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import Resources from '../../assets/config/resources.json';
import * as $ from 'jquery';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  resources = Resources.resources;

  constructor(private router: Router) { 
  }

  ngOnInit() {
    window.addEventListener('scroll', 
      function(e) {
        var m = 1 - 0.90;
        var $doc = $(document);
        $(".microscope").css({"background-attatchment" : "fixed"});
        
        var from_top = $doc.scrollTop();
        var bg_css = '100% ' + (m * from_top) + 'px';
        $(".microscope").css({"background-position" : bg_css });
      }
    );
  }

  public showVideos(resource, i) {
    sessionStorage.setItem('selectedResource', JSON.stringify(resource));
    sessionStorage.setItem('selectedIndex', JSON.stringify(i));
    this.router.navigate(['/resources']);  
  } 

}