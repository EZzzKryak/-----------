export interface Headphone {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  count: number;
  sale: number;
  category: Categories;
}
export enum Categories {
  HEADBAND = 'headband',
  IN_EAR = 'in-ear'
}

export enum Operation {
  DEC = "decrease",
  INC = "increase"
}

export interface ICartItem extends Headphone {
  count: number;
}

export interface CartProps {
  [productId: string]: Headphone;
}
