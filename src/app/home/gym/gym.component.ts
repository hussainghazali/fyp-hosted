import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import { InstagramService } from '../../shared/services/instagram.service';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-2.png'; // Change Logo
  public products: Product[] = [];

  constructor(public productService: ProductService,
    private instaService: InstagramService) {
    this.productService.getProducts.subscribe(response => 
      this.products = response.filter(item => item.type == 'gym')
    );
  }

  public sliders = [{
    title: 'summer sale',
    subTitle: 'Apparel',
    image: 'assets/images/slider/19.jpg'
  }, {
    title: 'summer sale',
    subTitle: 'Apparel',
    image: 'assets/images/slider/19.jpg'
  }];
  
  // Blog
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
  }];

  // Logo
  public logos = [{
    image: 'assets/images/logos/1.jpg',
  }, {
    image: 'assets/images/logos/2.jpg',
  }, {
    image: 'assets/images/logos/3.jpg',
  }, {
    image: 'assets/images/logos/4.jpg',
  }, {
    image: 'assets/images/logos/5.jpg',
  }, {
    image: 'assets/images/logos/1.jpg',
  }, {
    image: 'assets/images/logos/2.jpg',
  }, {
    image: 'assets/images/logos/3.jpg',
  }];


  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#3d72f1');
    document.documentElement.style.setProperty('--theme-gradient1', '#01effc');
    document.documentElement.style.setProperty('--theme-gradient2', '#485ff2');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
    document.documentElement.style.removeProperty('--theme-gradient1');
    document.documentElement.style.removeProperty('--theme-gradient2');
  }

}
