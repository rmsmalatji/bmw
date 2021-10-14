import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  name = 'BMW';

  images = [];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    this.images.push('./assets/images/mainBanner/BMW_M5.jpg');
    this.images.push('./assets/images/mainBanner/BMW_X4.jpg');
    // this.images.push('./assets/images/bottomCarousel/520d.jpg');
    // this.images.push('./assets/images/bottomCarousel/prime-7.jpg');
    // this.images.push('./assets/images/bottomCarousel/X3.jpg');
  }

}
