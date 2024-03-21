import { Link } from "react-router-dom";
import { Headphone } from "../../mockData/types";
import cls from "./Product.module.scss";

interface ProductProps {
  product: Headphone;
  addProductToCart: (product: Headphone) => void;
  isInCart: (productId: number) => boolean;
}

const Product = ({ product, addProductToCart, isInCart }: ProductProps) => {
  return (
    <li className={cls.productItem}>
      <img className={cls.image} src={product.img} alt={cls.title} />
      <div className={cls.info}>
        <h2 className={cls.title}>{product.title}</h2>
        <p className={cls.price}>{product.price} &#8381;</p>
        <div className={cls.rateWrapper}>
          <div className={cls.rateImg} />
          <p className={cls.rate}>{product.rate}</p>
        </div>
        {isInCart(product.id) ? (
          <button className={cls.buyBtn} disabled>
            <Link className={cls.linkToCart} to='/cart'>
              В корзине
            </Link>
          </button>
        ) : 
        <button
          onClick={() => addProductToCart(product)}
          className={cls.buyBtn}
          disabled={isInCart(product.id)}
        >
        Купить
        </button>
        }
      </div>
    </li>
  );
};

export default Product;
