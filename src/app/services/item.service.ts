import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Item } from '../model/item';

@Injectable()
export class ItemService {
  private _items$: Observable<Item> = from(items);

  public get items(): Observable<Item> {
    return this._items$;
  }

  constructor() {}
}

const items: Item[] = [
  {
    id: '1',
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    photos: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    ],
    prices: {
      '1gb': 199.99,
      '2gb': 299.01,
    },
  },
  {
    id: '2',
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    photos: [
      'https://cdn.dummyjson.com/product-images/2/1.jpg',
      'https://cdn.dummyjson.com/product-images/2/2.jpg',
      'https://cdn.dummyjson.com/product-images/2/3.jpg',
      'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
    ],
    prices: {
      '2gb': 399.99,
      '4gb': 499.01,
    },
  },
  {
    id: '3',
    title: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    photos: ['https://cdn.dummyjson.com/product-images/3/1.jpg'],
    prices: {
      '1gb': 199.01,
      '2gb': 299,
    },
  },
  {
    id: '4',
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    photos: [
      'https://cdn.dummyjson.com/product-images/4/1.jpg',
      'https://cdn.dummyjson.com/product-images/4/2.jpg',
      'https://cdn.dummyjson.com/product-images/4/3.jpg',
      'https://cdn.dummyjson.com/product-images/4/4.jpg',
      'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
    ],
    prices: {
      '1gb': 149.99,
      '2gb': 249.01,
    },
  },
  {
    id: '5',
    title: 'Huawei P30',
    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    photos: [
      'https://cdn.dummyjson.com/product-images/5/1.jpg',
      'https://cdn.dummyjson.com/product-images/5/2.jpg',
      'https://cdn.dummyjson.com/product-images/5/3.jpg',
    ],
    prices: {
      '1gb': 149.99,
      '2gb': 249.01,
    },
  },
  {
    id: '6',
    title: 'MacBook Pro',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
    photos: [
      'https://cdn.dummyjson.com/product-images/6/1.png',
      'https://cdn.dummyjson.com/product-images/6/2.jpg',
      'https://cdn.dummyjson.com/product-images/6/3.png',
      'https://cdn.dummyjson.com/product-images/6/4.jpg',
    ],
    prices: {
      '4gb': 399.99,
      '8gb': 499.01,
    },
  },
  {
    id: '7',
    title: 'Samsung Galaxy Book',
    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
    photos: [
      'https://cdn.dummyjson.com/product-images/7/1.jpg',
      'https://cdn.dummyjson.com/product-images/7/2.jpg',
      'https://cdn.dummyjson.com/product-images/7/3.jpg',
      'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
    ],
    prices: {
      '1gb': 149.99,
      '2gb': 249.01,
    },
  },
  {
    id: '8',
    title: 'Microsoft Surface Laptop 4',
    description:
      'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
    photos: [
      'https://cdn.dummyjson.com/product-images/8/1.jpg',
      'https://cdn.dummyjson.com/product-images/8/2.jpg',
      'https://cdn.dummyjson.com/product-images/8/3.jpg',
      'https://cdn.dummyjson.com/product-images/8/4.jpg',
      'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
    ],
    prices: {
      '4gb': 349.99,
      '8gb': 449.01,
    },
  },
  {
    id: '9',
    title: 'Infinix INBOOK',
    description:
      'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
    photos: [
      'https://cdn.dummyjson.com/product-images/9/1.jpg',
      'https://cdn.dummyjson.com/product-images/9/2.png',
      'https://cdn.dummyjson.com/product-images/9/3.png',
      'https://cdn.dummyjson.com/product-images/9/4.jpg',
      'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
    ],
    prices: {
      '1gb': 149.99,
      '2gb': 249.01,
    },
  },
  {
    id: '10',
    title: 'HP Pavilion 15-DK1056WM',
    description:
      'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
    photos: [
      'https://cdn.dummyjson.com/product-images/10/1.jpg',
      'https://cdn.dummyjson.com/product-images/10/2.jpg',
      'https://cdn.dummyjson.com/product-images/10/3.jpg',
      'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
    ],
    prices: {
      '4gb': 349.99,
      '8gb': 449.01,
    },
  },
  {
    id: '11',
    title: 'perfume Oil',
    description:
      'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
    photos: [
      'https://cdn.dummyjson.com/product-images/11/1.jpg',
      'https://cdn.dummyjson.com/product-images/11/2.jpg',
      'https://cdn.dummyjson.com/product-images/11/3.jpg',
      'https://cdn.dummyjson.com/product-images/11/thumbnail.jpg',
    ],
    prices: {
      '10ml': 899.01,
      '20ml': 999.99,
    },
  },
  {
    id: '12',
    title: 'Brown Perfume',
    description: 'Royal_Mirage Sport Brown Perfume for Men & Women',
    photos: [
      'https://cdn.dummyjson.com/product-images/12/1.jpg',
      'https://cdn.dummyjson.com/product-images/12/2.jpg',
      'https://cdn.dummyjson.com/product-images/12/3.png',
      'https://cdn.dummyjson.com/product-images/12/4.jpg',
      'https://cdn.dummyjson.com/product-images/12/thumbnail.jpg',
    ],
    prices: {
      '10ml': 899.01,
      '20ml': 999.99,
    },
  },
  {
    id: '13',
    title: 'Fog Scent Xpressio Perfume',
    description:
      'Product details of Best Fog Scent Xpressio Perfume For Men cool long lasting perfumes for Men',
    photos: [
      'https://cdn.dummyjson.com/product-images/13/1.jpg',
      'https://cdn.dummyjson.com/product-images/13/2.png',
      'https://cdn.dummyjson.com/product-images/13/3.jpg',
      'https://cdn.dummyjson.com/product-images/13/4.jpg',
      'https://cdn.dummyjson.com/product-images/13/thumbnail.webp',
    ],
    prices: {
      '10ml': 899.01,
      '20ml': 999.99,
    },
  },
  {
    id: '14',
    title: 'Non-Alcoholic Concentrated Perfume Oil',
    description:
      'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
    photos: [
      'https://cdn.dummyjson.com/product-images/14/1.jpg',
      'https://cdn.dummyjson.com/product-images/14/2.jpg',
      'https://cdn.dummyjson.com/product-images/14/3.jpg',
      'https://cdn.dummyjson.com/product-images/14/thumbnail.jpg',
    ],
    prices: {
      '10ml': 899.01,
      '20ml': 999.49,
    },
  },
  {
    id: '15',
    title: 'Eau De Perfume Spray',
    description:
      'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
    photos: [
      'https://cdn.dummyjson.com/product-images/15/1.jpg',
      'https://cdn.dummyjson.com/product-images/15/2.jpg',
      'https://cdn.dummyjson.com/product-images/15/3.jpg',
      'https://cdn.dummyjson.com/product-images/15/4.jpg',
      'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
    ],
    prices: {
      '10ml': 899.01,
    },
  },
  {
    id: '16',
    title: 'Hyaluronic Acid Serum',
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    photos: [
      'https://cdn.dummyjson.com/product-images/16/1.png',
      'https://cdn.dummyjson.com/product-images/16/2.webp',
      'https://cdn.dummyjson.com/product-images/16/3.jpg',
      'https://cdn.dummyjson.com/product-images/16/4.jpg',
      'https://cdn.dummyjson.com/product-images/16/thumbnail.jpg',
    ],
    prices: {
      '10ml': 799.01,
      '20ml': 899.99,
    },
  },
  {
    id: '17',
    title: 'Tree Oil 30ml',
    description:
      'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
    photos: [
      'https://cdn.dummyjson.com/product-images/17/1.jpg',
      'https://cdn.dummyjson.com/product-images/17/2.jpg',
      'https://cdn.dummyjson.com/product-images/17/3.jpg',
      'https://cdn.dummyjson.com/product-images/17/thumbnail.jpg',
    ],
    prices: {
      '30ml': 500,
    },
  },
  {
    id: '18',
    title: 'Oil Free Moisturizer 100ml',
    description:
      'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
    photos: [
      'https://cdn.dummyjson.com/product-images/18/1.jpg',
      'https://cdn.dummyjson.com/product-images/18/2.jpg',
      'https://cdn.dummyjson.com/product-images/18/3.jpg',
      'https://cdn.dummyjson.com/product-images/18/4.jpg',
      'https://cdn.dummyjson.com/product-images/18/thumbnail.jpg',
    ],
    prices: {
      '100ml': 12.12,
    },
  },
  {
    id: '19',
    title: 'Skin Beauty Serum.',
    description:
      'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
    photos: [
      'https://cdn.dummyjson.com/product-images/19/1.jpg',
      'https://cdn.dummyjson.com/product-images/19/2.jpg',
      'https://cdn.dummyjson.com/product-images/19/3.png',
      'https://cdn.dummyjson.com/product-images/19/thumbnail.jpg',
    ],
    prices: {
      '10ml': 899.01,
      '20ml': 999.99,
    },
  },
  {
    id: '20',
    title: 'Freckle Treatment Cream- 15gm',
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    photos: [
      'https://cdn.dummyjson.com/product-images/20/1.jpg',
      'https://cdn.dummyjson.com/product-images/20/2.jpg',
      'https://cdn.dummyjson.com/product-images/20/3.jpg',
      'https://cdn.dummyjson.com/product-images/20/4.jpg',
      'https://cdn.dummyjson.com/product-images/20/thumbnail.jpg',
    ],
    prices: {
      '15gm': 123.45,
    },
  },
];
