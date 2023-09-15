import Button from '@/components/Buttons/Main/Button';
import { Facebook, Google } from '@/icons/svgIcon';
import Image from 'next/image';
import styles from './Signup.module.css';

const Signup: React.FC = ({}) => {
  return (
    <div className={`${styles.signup}  `}>
      <div className={`${styles.img__box} ${styles.box} p-20`}>
        <Image src={'/food.jpg'} alt="" fill />
      </div>
      <div className={`${styles.form__box} ${styles.box} text-black`}>
        <h2 className=" font-bold text-3xl ">Signup</h2>
        <div className={styles.auth__btns}>
          <Button
            label="signup with google"
            type="custom"
            className="auth__btn"
            fontWeight="lighter"
            size="medium"
            style={{ display: 'flex', gap: '10px', alignItems:'center',flex:1,minWidth:'184px' }}
            Icon={<Google width="30px" />}
          />
          <Button
            label="signup with facebook"
            type="custom"
            className="auth__btn"
            fontWeight="lighter"
            size="medium"
            style={{ display: 'flex', gap: '10px', alignItems:'center',flex:1,minWidth:'184px' }}
            Icon={<Facebook width="30px" />}
          />
        </div>
        <div className={styles.form__caption}>
          <span>Or Use Your Email</span>
        </div>
        <div className={styles.single__form__box}>
          <label htmlFor="" className='text-[#626569]'>Email Adress</label>
          <input type="text" />
        </div>
        <div className={styles.single__form__box}>
          <label htmlFor="" className='text-[#626569]'>Password</label>
          <input type="password" />
        </div>
        <div className={styles.form__info}>
          <div className={styles.checkbox}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className=''>i agree to the Terms of Services and Privacy Policy</label>
          </div>
          
        </div>
        <Button type='primary' label='Sign up' style={{width:'100%',borderRadius:'4px'}}/>
      </div>
    </div>
  );
};

export default Signup;
