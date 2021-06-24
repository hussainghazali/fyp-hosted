import { Component, OnInit } from '@angular/core';
import { ProductSlider } from '../../../shared/data/slider';
import { Product } from '../../../shared/classes/product';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-fashion-one',
  templateUrl: './fashion-one.component.html',
  styleUrls: ['./fashion-one.component.scss']
})
export class FashionOneComponent implements OnInit {

  public products: Product[] = [];
  public productCollections: any[] = [];
  
  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'fashion');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  public ProductSliderConfig: any = ProductSlider;

  public sliders = [{
    title: 'Blue Pottery',
    subTitle: 'Functional Crafts',
    image: 'assets/images/slider/1.jpg'
  }, {
    title: 'Ceramics & Pottery',
    subTitle: 'Functional Crafts',
    image: 'assets/images/slider/2.jpg'
  },
  {
    title: 'Basketry',
    subTitle: 'Functional Crafts',
    image: 'assets/images/slider/2.jpg'
  }]

  // Collection banner
  public collections = [{
    image: 'assets/images/collection/fashion/1.jpg',
    save: 'save 50%',
    title: 'Ceramics'
  }, {
    image: 'assets/images/collection/fashion/2.jpg',
    save: 'save 50%',
    title: 'Basketry'
  },
];

  // Blog
  public blog = [{
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
  public logo = [{
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
    image: 'assets/images/logos/3.jpg',
  }, {
    image: 'assets/images/logos/4.jpg',
  }];

  ngOnInit(): void {
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
