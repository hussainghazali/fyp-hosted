import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductSlider, CollectionSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-14.png'; // Change Logo
  
  public products: Product[] = [];
  public productCollections: any[] = [];

  public ProductSliderConfig: any = ProductSlider;
  public CollectionSliderConfig: any = CollectionSlider;

  constructor(private _sanitizer:DomSanitizer,
    public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'watch');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  public sliders = [{
    title: 'Wallets',
    subTitle: 'Bags',
    image: 'assets/images/slider/9.jpg'
  }, {
    title: 'Handbags',
    subTitle: 'Bags',
    image: 'assets/images/slider/9.jpg'
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

  // Collection
  public categories = [{
    image: 'assets/images/categories/1.jpg',
    title: 'Pouches'}
    , 
    {
    image: 'assets/images/categories/2.jpg',
    title: 'Clutches and Wristlets'}, {
    image: 'assets/images/categories/3.jpg',
    title: 'Metal Bags'}, {
    image: 'assets/images/categories/4.jpg',
    title: 'Shoulder Bags'}, {
    image: 'assets/images/categories/1.jpg',
    title: 'Pouches'}]

  // collection
  public collections = [{
    image: 'assets/images/collection/watch/1.jpg',
    title: 'minimum 10% off',
    text: 'new bags'
  }, {
    image: 'assets/images/collection/watch/2.jpg',
  }, {
    image: 'assets/images/collection/watch/3.jpg',
    title: 'minimum 10% off',
    text: 'gold bags`'
  }]

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
    image: 'assets/images/blog/1.jpg',
    date: '05 November 2020',
    title: 'Handmade Footballs',
    by: 'Abida Bibi'
  }];

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#e4604a');
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
