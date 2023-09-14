import Link from 'next/link';
import { Send } from '../../../icons/svgIcon';
import Button from '../../Buttons/Main/Button';
import styles from './Footer.module.css';

const Footer: React.FC = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <div>
          <div className={styles.logo}>
            <h1>
              F<span>O</span>
              <span>O</span>D
            </h1>
          </div>
          <div className={styles.footer__details}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium labore voluptates aut molestias,
            </p>
          </div>
        </div>
        <div className={styles.links__box}>
          <div className={styles.links__box__col}>
            <h3>Company</h3>
            <Link href="/">About Us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">All Products</Link>
            <Link href="/">Location Map</Link>
          </div>
        </div>
        <div className={styles.links__box}>
          <div className={styles.links__box__col}>
            <h3>hello</h3>
            <Link href="/">menu</Link>
            <Link href="/">home</Link>
            <Link href="/">products</Link>
            <Link href="/">payment</Link>
          </div>
        </div>
        <div className={styles.links__box}>
          <div className={styles.links__box__col}>
            <h3>Get in Touch</h3>
            <Link href="/">menu</Link>
            <Link href="/">home</Link>
            <Link href="/">products</Link>
            <Link href="/">payment</Link>
            <div className={styles.newsLatter}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
              />
              <Button
                type="primary"
                label=""
                fontWeight="bold"
                size="small"
                Icon={<Send color="#fff" width={'20px'} />}
                className="send__btn"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer__copyright}>
        <p>All Rights Reserved @ FOOD Company 2023</p>
        <div>
          <Link href="/">Terms & conditions</Link>
          <Link href="/">Privecy & Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
