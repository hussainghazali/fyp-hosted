import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	megaMenu?: boolean;
	image?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() { }

	public screenWidth: any;
	public leftMenuToggle: boolean = false;
	public mainMenuToggle: boolean = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'home', type: 'sub', active: false, children: [
				{
					title: 'Crafts', type: 'sub', active: false, children: [
						{ path: '/home/fashion', title: 'Functional', type: 'link' },
						{ path: '/home/fashion-2', title: 'Decorative', type: 'link' },
						{ path: '/home/fashion-3', title: 'Fashion', type: 'link' }
					]
				},
				{ path: '/home/vegetable', title: 'Jewellery', type: 'link' },
				{ path: '/home/watch', title: 'Bags', type: 'link' },
				{ path: '/home/furniture', title: 'Clothing', type: 'link' },
				{ path: '/home/flower', title: 'Footwear', type: 'link' },
				{ path: '/home/beauty', title: 'Home Decor', type: 'link' },
				{ path: '/home/electronics', title: 'Health & Wellbeing', type: 'link' },
				{ path: '/home/pets', title: 'Artwork AND Collectibles', type: 'link' },
				{ path: '/home/gym', title: 'Apparel', type: 'link' },
				{ path: '/home/tools', title: 'Accessories', type: 'link' },
				{ path: '/home/shoes', title: 'Shoes', type: 'link' },
				{ path: '/home/bags', title: 'Phone Cover', type: 'link' },
				{ path: '/home/marijuana', title: 'Musical Instruments', type: 'link' }
			]
		},
		{
			title: 'Shop', type: 'sub', active: false, children: [
				{ path: '/shop/collection/no/sidebar', title: 'By Region', type: 'link' },
				{ path: '/shop/collection/no/sidebar', title: 'By Style', type: 'link' },
				{ path: '/shop/collection/no/sidebar', title: 'By Choice', type: 'link' }
			]
		},
		{
			title: 'Products', type: 'sub', active: false, children: [
				{
					title: 'New Arrivals', type: 'sub', active: false, children: [
						{ path: '/shop/product/left/sidebar/trim-dress', title: 'Sindhi Ajrak', type: 'link' },
						{ path: '/shop/product/right/sidebar/trim-dress', title: 'Jwewllery Products', type: 'link' },
						{ path: '/shop/product/no/sidebar/trim-dress', title: 'Kitchen Accessories', type: 'link' }
					]
				},
				{ path: '/shop/product/three/column/trim-dress', title: 'Fair Trade', type: 'link' },
				{ path: '/shop/product/four/image/belted-dress', title: 'Featured Product', type: 'link' },
				{ path: '/shop/product/bundle/trim-dress', title: 'bundle-product', type: 'link' },
				{ path: '/shop/product/image/outside/trim-dress', title: 'Deals of the day', type: 'link' }
			]
		},
		{
			title: 'Features', type: 'sub', megaMenu: true, badge: true, badgeText: 'new', active: false, children: [
				{
					title: 'FEATURED COLLECTION OF 2021', type: 'sub', active: false, children: [
						{ path: '/pages/portfolio/masonry/full-width', title: 'Shop Now', type: 'link' }
					]
				}
			]},
		{
			title: 'pages', type: 'sub', active: false, children: [
				{
					title: 'account', type: 'sub', active: false, children: [
						{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
						{ path: '/pages/cart', title: 'cart', type: 'link' },
						{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
						{ path: '/pages/login', title: 'login', type: 'link' },
						{ path: '/pages/register', title: 'register', type: 'link' },
						{ path: '/pages/contact', title: 'contact', type: 'link' },
						{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
						{ path: '/pages/profile', title: 'profile', type: 'link' },
						{ path: '/pages/checkout', title: 'checkout', type: 'link' },
					]
				},
				{ path: '/pages/aboutus', title: 'about-us', type: 'link' },
				{ path: '/pages/search', title: 'search', type: 'link' },
				{ path: '/pages/review', title: 'review', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/pages/order/success', title: 'order-success', type: 'link' },
					{ 
						title: 'compare', type: 'sub', active: false, children: [
							{ path: '/pages/compare/one', title: 'compare-1', type: 'link' },
							{ path: '/pages/compare/two', title: 'compare-2', type: 'link', badge: true, badgeText: 'new' }
						]
					},
				{ path: '/pages/collection', title: 'collection', type: 'link' },
				{ path: '/pages/lookbook', title: 'lookbook', type: 'link' },
				{ path: '/pages/comingsoon', title: 'coming-soon', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/pages/faq', title: 'faq', type: 'link' }
			]
		},
		{
			title: 'blogs', type: 'sub', active: false, children: [
				{ path: '/pages/blog/right/sidebar', title: 'Blog Post', type: 'link' },
				{ path: '/pages/blog/details', title: 'blog-details', type: 'link' }
			]
		}
	];

	LEFTMENUITEMS: Menu[] = [
		{
			title: 'clothing', type: 'sub', megaMenu: true, active: false, children: [
			  {
				  title: 'mens fashion',  type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'top',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'shirts',  type: 'link' }
					  ]
			  },
			  {
				  title: 'women fashion',  type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'dresses',  type: 'link' },
					  { path: '/home/fashion', title: 'westarn wear',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' }
					]
			  },
			]
		},
		{
			title: 'bags', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'shopper bags', type: 'link' },
			  { path: '/home/fashion', title: 'laptop bags', type: 'link' },
			  { path: '/home/fashion', title: 'clutches', type: 'link' },
			  {
				  path: '/home/fashion', title: 'purses', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'purses',  type: 'link' },
					  { path: '/home/fashion', title: 'wallets',  type: 'link' },
					  { path: '/home/fashion', title: 'leathers',  type: 'link' },
					  { path: '/home/fashion', title: 'satchels',  type: 'link' }
				  ]
			  },
			]
		},
		{
			title: 'footwear', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'sport shoes', type: 'link' },
			  { path: '/home/fashion', title: 'formal shoes', type: 'link' },
			  { path: '/home/fashion', title: 'casual shoes', type: 'link' }
			]
		},
		{
			path: '/home/fashion', title: 'Apparel', type: 'link'
		},
		{
			title: 'Accessories', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'fashion jewellery', type: 'link' },
			  { path: '/home/fashion', title: 'caps and hats', type: 'link' },
			  { path: '/home/fashion', title: 'precious jewellery', type: 'link' },
			  {
				  path: '/home/fashion', title: 'more..', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'necklaces',  type: 'link' },
					  { path: '/home/fashion', title: 'earrings',  type: 'link' },
					  { path: '/home/fashion', title: 'rings & wrist wear',  type: 'link' },
					  {
						  path: '/home/fashion', title: 'more...',  type: 'link', active: false, children: [
							  { path: '/home/fashion', title: 'ties',  type: 'link' },
							  { path: '/home/fashion', title: 'cufflinks',  type: 'link' },
							  { path: '/home/fashion', title: 'pockets squares',  type: 'link' },
							  { path: '/home/fashion', title: 'helmets',  type: 'link' },
							  { path: '/home/fashion', title: 'scarves',  type: 'link' },
							  {
								  path: '/home/fashion', title: 'more...',  type: 'link', active: false, children: [
									  { path: '/home/fashion', title: 'accessory gift sets',  type: 'link' },
									  { path: '/home/fashion', title: 'travel accessories',  type: 'link' },
									  { path: '/home/fashion', title: 'phone cases',  type: 'link' }
								  ]
							  },
						]
					  }
				  ]
			  },
			]
		},
		{
			path: '/home/fashion', title: 'house of design', type: 'link'
		},
		{
			title: 'Musical Instruments', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'Tabla', type: 'link' },
			  { path: '/home/fashion', title: 'Guitar', type: 'link' },
			  { path: '/home/fashion', title: 'Piano', type: 'link' },
			  {
				  path: '/home/fashion', title: 'more..', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'fragrances',  type: 'link' },
					  { path: '/home/fashion', title: 'luxury beauty',  type: 'link' },
					  { path: '/home/fashion', title: 'hair care',  type: 'link' },
					  { path: '/home/fashion', title: 'tools & brushes',  type: 'link' }
				  ]
			  },
			]
		},
		{
			path: '/home/fashion', title: 'home & decor', type: 'link'
		},
		{
			path: '/home/fashion', title: 'Crafts', type: 'link'
		}
	];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);

}
