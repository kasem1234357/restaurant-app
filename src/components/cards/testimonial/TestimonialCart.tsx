import Image from 'next/image';
import styles from './TestimonialCart.module.css';

export interface ITestimonialCart {
  /**
   * img path to public folder
   */
  img: string;
  author: string;
  address: string;
  /**
   * title with tag h2
   */

  content: string;
  /**
   *padding [top, right, bottom, left]
   */
  padding?: string[];
}

const TestimonialCart: React.FC<ITestimonialCart> = ({
  padding,
  img,
  author,
  address,
  content,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonial__image}>
        <Image src={img} alt="" fill />
      </div>
      <div className={styles.testimonial__text}>
        <div className={`${styles.testimonial__content}`}>{content}</div>
        <div className={`${styles.testimonial__author}`}>
          <h3>{author}</h3>
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCart;
