export interface Headphone {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  count: number;
}

export interface ICartItem extends Headphone {
  count: number;
}

export interface CartProps {
  [productId: string]: Headphone;
}
