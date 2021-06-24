import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VideoModalComponent } from "../../shared/components/modal/video-modal/video-modal.component";
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-7.png'; // Change Logo
  public products: Product[] = [];

  public ProductSliderConfig: any = ProductSlider;

  @ViewChild("videoModal") VideoModal: VideoModalComponent;

  constructor(public productService: ProductService) {
      this.productService.getProducts.subscribe(response => 
        this.products = response.filter(item => item.type == 'beauty')
      );
  }

  // Sliders
  public sliders = [{
    title: 'save upto 20%',
    subTitle: 'Home Decor',
    image: 'assets/images/slider/15.jpg'
  }, {
    title: 'save upto 10%',
    subTitle: 'Furniture & Dining',
    image: 'assets/images/slider/15.jpg'
  }];

  // Blogs
  public blogs = [{
    image: 'assets/images/blog/1.jpg',
    date: '29 March 2020',
    title: 'Handmade Rilli',
    by: 'Ameeran Bibi'
  }, {
    image: 'assets/images/blog/2.jpg',
    date: '08 October 2020',
    title: 'Handmade Khussa',
    by: 'Raja Bheesham Lal'
  }, {
    image: 'assets/images/blog/3.jpg',
    date: '26 October 2020',
    title: 'Block Printed Ajrak',
    by: 'Abdul Majeed Soomro'
  }, {
    image: 'assets/images/blog/4.jpg',
    date: '05 November 2020',
    title: 'Handmade Footballs',
    by: 'Aqeel Abbas'
  }]

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#f0b54d');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

}
