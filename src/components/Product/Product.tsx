import { Link } from "react-router-dom";
import { Headphone } from "../../mockData/types";
import cls from "./Product.module.scss";
import { memo } from "react";

interface ProductProps {
  product: Headphone;
  addProductToCart: (product: Headphone) => void;
  isInCart: (id: number) => boolean;
}

const Product = memo(({ product, addProductToCart, isInCart }: ProductProps) => {
  const discountPrice = product.price - product.sale;
  const isDiscounted = product.price > discountPrice;

  return (
    <li className={cls.productItem}>
      <img className={cls.image} src={product.img} alt={cls.title} />
      <div className={cls.info}>
        <div className={cls.titleWrapper}>
        <h2 className={cls.title}>{product.title}</h2>
        </div>
        <div className={cls.priceWrapper}>
          <p className={cls.price}>{isDiscounted ? discountPrice : product.price} &#8381;</p>
          {isDiscounted && <p className={cls.oldPrice}>{product.price} &#8381;</p>}
        </div>
        <div className={cls.rateWrapper}>
          <div className={cls.rateImg} />
          <p className={cls.rate}>{product.rate.toFixed(1)}</p>
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
});

export default Product;
