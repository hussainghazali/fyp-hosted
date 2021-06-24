import { Component, OnInit } from '@angular/core';
import { TeamSlider, TestimonialSlider } from '../../shared/data/slider';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public TeamSliderConfig: any = TeamSlider;
  public TestimonialSliderConfig: any = TestimonialSlider;

  // Testimonial Carousel
  public testimonial = [{
    image: 'assets/images/testimonial/1.jpg',
    name: 'Hussain Ghazali',
    designation: 'Developer',
    description: 'k173900@nu.edu.pk',
  }, {
    image: 'assets/images/testimonial/2.jpg',
    name: 'Zuhair Waheed',
    designation: 'Developer',
    description: 'k173706@nu.edu.pk',
  }, {
    image: 'assets/images/testimonial/3.jpg',
    name: 'Shayan Noor Khan',
    designation: 'Developer',
    description: 'k173744@nu.edu.pk',
  }]

  // Team 
  public team = [{
    image: 'assets/images/team/1.jpg',
    name: 'Hussain Ghazali',
    designation: 'Developer'
  }, {
    image: 'assets/images/team/2.jpg',
    name: 'Zuhair Waheed',
    designation: 'Developer'
  }, {
    image: 'assets/images/team/3.jpg',
    name: 'Shayan Noor Khan',
    designation: 'Developer'
  }, {
    image: 'assets/images/team/4.jpg',
    name: 'Sir Fahad Samad',
    designation: 'Supervisor'
  }, {
    image: 'assets/images/team/3.jpg',
    name: 'John Shipmen',
    designation: 'Lead Developer'
 }]

}
