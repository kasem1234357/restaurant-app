import styles from './Button.module.css';

export interface IButton {
  size?: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary' | 'custom';
  fontWeight?: 'lighter' | 'bold' | 'normal';
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  className?: string;
  Icon?: React.ReactNode;
}

const Button: React.FC<IButton> = (props) => {
  const {
    label,
    className = 'null',
    size,
    backgroundColor,
    onClick,
    fontWeight = 'regular',
    type,
    Icon,
  } = props;
  return (
    <button
      style={{ backgroundColor: backgroundColor, fontWeight: fontWeight }}
      onClick={onClick}
      className={`${styles.container} ${styles[className]} ${
        styles[`btn-${size}`]
      } ${styles[`btn-${type}`]}`}
    >
      {Icon && Icon}
      {label}
    </button>
  );
};

export default Button;
