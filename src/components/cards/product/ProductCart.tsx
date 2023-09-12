import Image from 'next/image';
import styles from './ProductCart.module.css';

export interface IProductCart {
  /**
   * img path to public folder
   */
  img: string;
  /**
   * title with tag h2
   */
  title: string;
  weight: string;
  price: number;
  /**
   *padding [top, right, bottom, left]
   */
  padding?: string[];
}

const ProductCart: React.FC<IProductCart> = ({
  padding,
  img,
  title,
  weight,
  price,
}) => {
  return (
    <div
      style={{ padding: padding?.join(' ') }}
      className={`${styles.container} `}
    >
      <div className={`${styles.img__container}`}>
        <Image src={img} alt="" fill />
      </div>

      <h2>{title}</h2>
      <span>{weight}</span>
      <h2>${price}</h2>
      <div className={`${styles.count__box}`}>
        <div className={`${styles.quantity__control}`}>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <div className={`${styles.cart__icon}`}>
          <Image src={'/cart3.svg'} alt="" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
