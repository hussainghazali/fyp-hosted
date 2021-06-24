import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSlider, ProductOneSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-7.png'; // Change Logo
  public themeLogoWhite: string = 'assets/images/icon/logo-8.png'; // Change Logo
  
  public products: Product[] = [];
  public productCollections: any[] = [];

  public ProductSliderConfig: any = ProductSlider;
  public ProductSliderOneConfig: any = ProductOneSlider;

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'bags');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }
  
  // Sliders
  public sliders = [{
    title: 'summer sale',
    subTitle: 'Phone Covers',
    image: 'assets/images/slider/25.jpg'
  }, {
    title: 'summer sale',
    subTitle: 'Android',
    image: 'assets/images/slider/25.jpg'
  }, {
    title: 'summer sale',
    subTitle: 'IOS',
    image: 'assets/images/slider/25.jpg'
  }];

  // Categories
  public categories = ['Apple', 'Samsung', 'Huawei', 'Xiomi', 'hTC', 'One Plus'];

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

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#f0b54d');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }

}
