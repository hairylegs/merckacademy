import { Component, OnInit, Input, ViewChild, ElementRef, Inject, AfterViewChecked, Output, EventEmitter} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showBack = false;

  constructor(private router: Router) { 
  }
  
  public home() {
    this.router.navigate(['/home']); 
  }
  
  ngOnInit() {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if (events.url === '/' || events.url === "/home") {
          this.showBack = false;
        } else {
          this.showBack = true;
        }
      }
    });
  }
  
}
