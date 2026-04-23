import product1 from '../assets/product-1.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';
import product4 from '../assets/product-4.png';
import product5 from '../assets/product-5.png';
import product6 from '../assets/product-6.png';
import product7 from '../assets/product-7.png';
import product8 from '../assets/product-8.png';
import product9 from '../assets/product-9.png';
import product10 from '../assets/product-10.png';

export const products = [
  {
    id: 1,
    name: 'Sneakers',
    price: 23999,
    image: product1,
    description: 'Стильні кросівки для вашого гардероба.',
  },
  {
    id: 2,
    name: 'Perfume',
    price: 10999,
    image: product2,
    description: 'Елегантна парфумерія для спеціальних моментів.',
  },
  {
    id: 3,
    name: 'Hoodie',
    price: 3999,
    image: product3,
    tag: 'HOT',
    description: 'Комфортна худі для повсякденного носіння.',
  },
  {
    id: 4,
    name: 'Hoodie',
    price: 9999,
    image: product4,
    description: 'Тепла худі з м\'якою внутрішньою підкладкою.',
  },
  {
    id: 5,
    name: 'T-shirt',
    price: 16999,
    image: product5,
    tag: 'NEW',
    description: 'Преміум футболка з якісної тканини.',
  },
  {
    id: 6,
    name: 'T-shirt',
    price: 10999,
    image: product6,
    description: 'Класична футболка для будь-якої ocasії.',
  },
  {
    id: 7,
    name: 'T-shirt',
    price: 9999,
    image: product7,
    description: 'Комфортна футболка для щоденного носіння.',
  },
  {
    id: 8,
    name: 'Pants',
    price: 5999,
    image: product8,
    description: 'Функціональні штани з великою кількістю кишень.',
  },
  {
    id: 9,
    name: 'Hoodie',
    price: 6599,
    image: product9,
    tag: 'BEST',
    description: 'Стильна худі для холодної погоди.',
  },
  {
    id: 10,
    name: 'T-shirt',
    price: 4599,
    image: product10,
    description: 'Легка футболка для гарячих днів.',
  },
];

export const maxStorePrice = Math.max(...products.map((product) => product.price));

export const getProductById = (id) => products.find((product) => product.id === Number(id));
