import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategorySlider, ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-6.png'; // Change Logo
  
  public products: Product[] = [];
  public productCollections: any[] = [];

  public CategorySliderConfig: any = CategorySlider;
  public ProductSliderConfig: any = ProductSlider;
  
  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'shoes');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  // sliders
  public sliders = [{
    title: 'special offer',
    subTitle: 'men shoes',
    image: 'assets/images/slider/23.jpg'
  }, {
    title: 'special offer',
    subTitle: 'women shoes',
    image: 'assets/images/slider/24.jpg'
  }];
  

  public sizes = ['size 06', 'size 07', 'size 08', 'size 09', 'size 10'];

  // Categories
  public categories = [{
    image: 'assets/images/icon/cat1.png',
    title: 'sport shoes'
  }, {
    image: 'assets/images/icon/cat2.png',
    title: 'casual shoes'
  }, {
    image: 'assets/images/icon/cat3.png',
    title: 'formal shoes'
  }, {
    image: 'assets/images/icon/cat4.png',
    title: 'flat'
  }, {
    image: 'assets/images/icon/cat5.png',
    title: 'heels'
  }, {
    image: 'assets/images/icon/cat6.png',
    title: 'boots'
  }];

  // Collection banner
  public collections1 = [{
    image: 'assets/images/collection/shoes/1.jpg',
    save: 'save 50%',
    title: 'men'
  }, {
    image: 'assets/images/collection/shoes/2.jpg',
    save: 'save 50%',
    title: 'women'
  }];

  // Collection banner
  public collections2 = [{
    image: 'assets/images/categories/14.jpg',
    title: 'men'
  }, {
    image: 'assets/images/categories/15.jpg',
    title: 'women'
  }, {
    image: 'assets/images/categories/16.jpg',
    title: 'kids'
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
    document.documentElement.style.setProperty('--theme-deafult', '#3fdda7');
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
