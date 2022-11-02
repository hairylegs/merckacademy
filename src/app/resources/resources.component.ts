import { Component, OnInit, Input, ViewChild, ElementRef, Inject, AfterViewChecked, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router'; 
import Resources from '../../assets/config/resources.json';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})

export class ResourcesComponent implements AfterViewChecked {

  /**
   * define direct references to elements on the page.
   */
   
  //videoSource: HTMLVideoElement;
  //@ViewChild('videoSource', { static: false }) 
  //  set videoSourceEl(el: ElementRef) {
  //    this.videoSource = el.nativeElement;
  //}
  
  slides: HTMLImageElement;
  @ViewChild('slides', { static: false }) 
    set slidesEl(el: ElementRef) {
      this.slides = el.nativeElement;
  }
  
  //videoButton: HTMLImageElement;
  //@ViewChild('showVideo', { static: false }) 
  //  set showVideoEl(el: ElementRef) {
  //    this.videoButton = el.nativeElement;
  //}  
  
  leftArrow: HTMLImageElement;
  @ViewChild('leftArrow', { static: false }) 
    set leftArrowEl(el: ElementRef) {
      this.leftArrow = el.nativeElement;
  }   

  rightArrow: HTMLImageElement;
  @ViewChild('rightArrow', { static: false }) 
    set rightArrowEl(el: ElementRef) {
      this.rightArrow = el.nativeElement;
  }   
    
  firstBlock: HTMLImageElement;
  @ViewChild('firstBlockSlide', { static: false }) 
    set firstBlockEl(el: ElementRef) {
      this.firstBlock = el.nativeElement;
  } 
  
  scrollBlock: HTMLDivElement;
  @ViewChild('scrollBlock', { static: false }) 
    set scrollBlockEl(el: ElementRef) {
      this.scrollBlock = el.nativeElement;
  } 
  
  thumbnailArrowLeft: HTMLDivElement;
  @ViewChild('thumbnailArrowLeft', { static: false }) 
    set thumbnailArrowLeftEl(el: ElementRef) {
      this.thumbnailArrowLeft = el.nativeElement;
  } 
  
  thumbnailArrowRight: HTMLDivElement;
  @ViewChild('thumbnailArrowRight', { static: false }) 
    set thumbnailArrowRightEl(el: ElementRef) {
      this.thumbnailArrowRight = el.nativeElement;
  }  
  
  mainSlideView: HTMLDivElement;
  @ViewChild('mainSlideView', { static: false }) 
    set mainSlideViewEl(el: ElementRef) {
      this.mainSlideView = el.nativeElement;
  }    

  resource = null;
  index = null;
  slideIndex = null;
  resources = Resources.resources;
  currentResource = null;
  navColor: Array<string> = [];
  navBorderColor: Array<string> = [];
  navBorderHeight: Array<string> = [];
  prevColor = 0;
  prevBorderColor = 0;
  prevSlideElement = null;
  currentSlideElement = null;
  colorBlack: string = "rgb(0,0,0)";
  colorGreen: string = "rgb(18,133,124)"; 
  colorGray: string = "rgb(211,211,211)";
  colorMint: string = "rgb(114,205,180)";
  touchStartX = 0;
  touchEndX = 0;
  @Output() showBack = new EventEmitter<boolean>();

  /**
   * create references to the document and router and sets the
   * default state of the user selections.
   */
   
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { 
    this.resource = JSON.parse(sessionStorage.getItem('selectedResource'));
    this.index = JSON.parse(sessionStorage.getItem('selectedIndex'));
    this.prevColor = this.index;
    this.prevBorderColor = this.index;
    this.navColor[this.index] = this.colorGreen;
    this.navBorderColor[this.index] = this.colorGreen;
    this.navBorderHeight[this.index] = "4px";
  }
  
  /**
   * shows the thumbnail scrollbar arrows if there is
   * scrollable content otherwise it hides the arrows.
   */
  
  public scrollBarCheck() {
    if (this.scrollBlock.scrollWidth > this.scrollBlock.clientWidth) {
      this.thumbnailArrowRight.style.display = "block";
      this.thumbnailArrowLeft.style.display = "block";
    } else {
      this.thumbnailArrowRight.style.display = "none";
      this.thumbnailArrowLeft.style.display = "none";
    }
  }
  
  /**
   * transitions the slide to the next one
   * if clicked. If the max is reached the
   * arrow control is hidden.
   */

  public slideRight() {
    this.slideIndex++;

    if (this.slideIndex >= (this.resource.slides.length)) {
      this.slideIndex = this.resource.slides.length - 1;
    } 
    
    this.showArrows(false);
    this.slides.src = this.resource.slides[this.slideIndex];
  }
  
  /**
   * transitions the slide to the previous one
   * if clicked. If the min is reached the
   * arrow control is hidden.
   */  
  
  public slideLeft() {
    this.slideIndex--;
    
    if (this.slideIndex <= 0) {
      this.slideIndex = 0;
    } 
    
    this.showArrows(false);
    this.slides.src = this.resource.slides[this.slideIndex];
  }  
  
  /**
   * shows the resource if clicked on the navigation
   * menu. Changes the selected color; border; hides the
   * video and sets the current selection.
   */
  
  public showResources(i) {
    this.navColor[this.prevColor] = this.colorBlack;
    this.navBorderColor[this.prevBorderColor] = this.colorGray;
    this.navBorderHeight[this.prevBorderColor] = "2px";
    
    this.prevColor = i;
    this.prevBorderColor = i;
    
    this.navColor[i] = this.colorGreen;
    this.navBorderColor[i] = this.colorGreen;
    this.navBorderHeight[i] = "4px";
    
    this.resource = this.resources[i];
    
    //if (this.resource.video == "") {
    //  this.videoButton.style.display = "none";
    //} else {
    //  this.videoButton.style.display = "block";
    //}
    
    this.slides.src = this.resource.slides[0];
    sessionStorage.setItem('selectedResource', JSON.stringify(this.resource));
    sessionStorage.setItem('selectedIndex', JSON.stringify(i));
    
    
    this.scrollBarCheck();
  } 
  
  /**
   * navigates to the selected slide if
   * selected from the thumbnail 
   * navigation. 
   */
  
  public gotoSlide(event, i) {
    this.currentSlideElement = event.srcElement;
    
    this.slideIndex = i;
    this.slides.src = this.resource.slides[this.slideIndex];
    
    this.showArrows(true);
  }

  /**
   * shows a video if associated to
   * a resource.
   */

  //public showVideos() {
  //  this.videoSource.src = this.resource.video;
  //  this.videoSource.load();
  //}
  
  /**
   * pauses a video. This is used when
   * a video is playing and the modal
   * box is closed.
   */
  
  //public stopVideo() {
  //  this.videoSource.pause();
  //}
  
  /**
   * shows or hides arrows
   * depending on the state 
   * of the current slide.
   */
  
  public showArrows(skip) {
    if (!skip) {
      this.currentSlideElement = this.document.getElementById(this.slideIndex.toString());
    }
  
    //slide nav
    if (this.prevSlideElement != null) {
      //this.prevSlideElement.style.borderBottom = "none";
      this.prevSlideElement.style.opacity = "0.5";
    } else {
      //this.firstBlock.style.borderBottom = "none";
      this.firstBlock.style.opacity = "0.5";
    }
    
    // this.currentSlideElement.style.borderBottom = "2pt solid " + this.colorGreen;
    this.currentSlideElement.style.opacity = "1";
    this.prevSlideElement = this.currentSlideElement;

    // right
    if (this.slideIndex >= (this.resource.slides.length - 1)) {
      this.rightArrow.style.display = "none";
      this.leftArrow.style.display = "block";
      return;
    } else {
      this.rightArrow.style.display = "block";
      this.leftArrow.style.display = "block";
    }
    
    //left
    if (this.slideIndex <= 0) {
      this.leftArrow.style.display = "none";
    } else {
      this.leftArrow.style.display = "block";
      this.rightArrow.style.display = "block";
    }
    
  }
  
  public thumbnailLeft() {
    this.scrollBlock.scrollLeft = this.scrollBlock.scrollLeft - 100;
  }
  
  public thumbnailRight() {
    this.scrollBlock.scrollLeft = this.scrollBlock.scrollLeft + 100;
  }
  
  /**
   * touch events for mobile.
   */
  
  public handleSwipe() {
  }
  
  ngOnInit() {
    this.showBack.emit(true);
  }
   
  ngAfterViewChecked() {
    this.scrollBarCheck();
  }

}