import Image from 'next/image';
import styles from './Login.module.css';
import Button from '@/components/Buttons/Main/Button';
import { Facebook, Google } from '@/icons/svgIcon';

const Login: React.FC = ({}) => {
  return (
    <div className={`${styles.login}  `}>
      <div className={`${styles.img__box} ${styles.box} p-20`}>
        <Image src={'/food.jpg'} alt="" fill />
      </div>
      <div className={`${styles.form__box} ${styles.box} text-black`}>
        <h2 className=" font-bold text-3xl ">Login</h2>
        <div className={styles.auth__btns}>
          <Button
            label="signin with google"
            type="custom"
            className="auth__btn"
            fontWeight="lighter"
            size="medium"
            style={{ display: 'flex', gap: '10px', alignItems:'center',flex:1,minWidth:'184px' }}
            Icon={<Google width="30px" />}
          />
          <Button
            label="signin with facebook"
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
            <label htmlFor="">Keep me logged in</label>
          </div>
          <p className='  text-[#626569]'>Forget Password</p>
        </div>
        <Button type='primary' label='Log in' style={{width:'100%',borderRadius:'4px'}}/>
      </div>
    </div>
  );
};

export default Login;
