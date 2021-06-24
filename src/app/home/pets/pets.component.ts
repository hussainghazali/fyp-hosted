import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-13.png'; // Change Logo
  
  public products: Product[] = [];
  
  public ProductSliderConfig: any = ProductSlider;

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'pets');
    });
  }

  public sliders = [{
    title: 'every pet is different',
    subTitle: 'lets shop',
    image: 'assets/images/slider/17.jpg'
  }, {
    title: 'Any thing that pets want',
    subTitle: 'save 20%',
    image: 'assets/images/slider/17.jpg'
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
}]

  // Collection banner
  public collections1 = [{
    image: 'assets/images/collection/pets/1.jpg',
    title: 'Digital Art'
  }, 
  {
    image: 'assets/images/collection/pets/2.jpg',
    title: 'Drawings'
  },
  {
    image: 'assets/images/collection/pets/3.jpg',
    title: 'Paintings'
  }];

  public collections2 = [{
    image: 'assets/images/collection/pets/4.jpg',
    title: 'Sculpture Art'
  },
  {
    image: 'assets/images/collection/pets/5.jpg',
    title: 'Acrylic'
  },
  {
    image: 'assets/images/collection/pets/6.jpg',
    title: 'Pencil'
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

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#ff9944');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

}
