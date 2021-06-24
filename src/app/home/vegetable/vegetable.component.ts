import { Component, OnInit } from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent implements OnInit {

  public products: Product[] = [];
  public ProductSliderConfig: any = ProductSlider;

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => 
      this.products = response.filter(item => item.type == 'vegetables')
    );
  }

  // Sliders
  public sliders = [{
    title: 'save 10%',
    subTitle: 'Jewellery',
    image: 'assets/images/slider/7.jpg'
  }, {
    title: 'save 10%',
    subTitle: 'Jewellery',
    image: 'assets/images/slider/7.jpg'
  }];

  // Blogs
  public blogs =   [{
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
  }

}
