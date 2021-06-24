import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-12.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'furniture');
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
    title: 'Men',
    subTitle: 'Clothing Trends',
    image: 'assets/images/slider/12.jpg'
  }, {
    title: 'Women',
    subTitle: 'Clothing Trends',
    image: 'assets/images/slider/12.jpg'
  }];

  // Collection banner
  public collections = [{
    image: 'assets/images/collection/furniture/1.jpg',
    save: 'save 50%',
    title: 'Women',
    link: '/home/left-sidebar/collection/furniture'
  }, {
    image: 'assets/images/collection/furniture/2.jpg',
    save: 'save 50%',
    title: 'Kids',
    link: '/home/left-sidebar/collection/furniture'
  },{
    image: 'assets/images/collection/furniture/3.jpg',
    save: 'save 50%',
    title: 'Men',
    link: '/home/left-sidebar/collection/furniture'
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
    document.documentElement.style.setProperty('--theme-deafult', '#d4b196');
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
