import {Directive, ElementRef, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appRatingStars]'
})
export class RatingStarsDirective implements OnInit {
  @Input() appRatingStars = 5;
  @Input() maxRating = 5;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
    for (let i = 1; i <= this.maxRating; i++) {
      const matIcon = document.createElement('mat-icon');
      if (i <= this.appRatingStars) {
        matIcon.innerHTML = 'star';
      } else {
        matIcon.innerHTML = 'star_outline';
      }
      matIcon.setAttribute('_ngcontent-c14', '');
      matIcon.classList.add('mat-icon');
      matIcon.classList.add('material-icons');
      matIcon.setAttribute('role', 'img');
      matIcon.setAttribute('aria-hidden', 'true');
      this.renderer.appendChild(this.elementRef.nativeElement, matIcon);
    }
  }
}
