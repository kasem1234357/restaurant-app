import { IProductCart } from './ProductCart';

const base: IProductCart = {
  padding: ['20px', '10px', '20px', '10px'],
  img: '/product1.png',
  title: 'Easy To Order',
  weight: '140 g ',
  price: 2.99,
};

export const mockProductCartProps = {
  base,
};
