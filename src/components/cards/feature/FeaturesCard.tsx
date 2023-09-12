import Image from 'next/image';
import styles from './FeaturesCard.module.css';

export interface IFeaturesCard {
  /**
   * img path to public folder
   */
  img: string;
  /**
   * title with tag h2
   */
  title: string;
  content: string;
  /**
   *padding [top, right, bottom, left]
   */
  padding?: string[];
}

const FeaturesCard: React.FC<IFeaturesCard> = ({
  padding,
  img,
  title,
  content,
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
      <p>{content}</p>
    </div>
  );
};

export default FeaturesCard;
