'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '../../Buttons/Main/Button';
import styles from './Navbar.module.css';
import { useState } from 'react';
type User = {
  name: string;
};

export interface INavbar {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const Navbar: React.FC<INavbar> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <div className={`${styles.storybook__header}`}>
        <div className={styles.logo}>
          <h1>
            F<span>O</span>
            <span>O</span>D
          </h1>
          <Image
            src="/menu.svg"
            alt=""
            width={25}
            height={25}
            className={styles.menu__icon}
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
        <div className={`${styles.navigation} ${active ? styles.active : ''}`}>
          <div className={styles.section__links}>
            <Link href="/">menu</Link>
            <Link href="/">home</Link>
            <Link href="/">products</Link>
            <Link href="/">payment</Link>
          </div>

          <div className={styles.header__box3}>
            {user ? (
              <>
                <span className={styles.account__links}>
                  <Image
                    className={styles.search__icon}
                    src="/search.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                  <Image src="/cart3.svg" alt="" width={25} height={25} />
                  <Image src="/account.svg" alt="" width={25} height={25} />
                </span>
                <Button
                  type="primary"
                  size="small"
                  onClick={onLogout}
                  label="Log out"
                />
              </>
            ) : (
              <>
                <Button
                  type="secondary"
                  size="small"
                  onClick={onLogin}
                  label="Log in"
                />
                <Button
                  type="primary"
                  size="small"
                  onClick={onCreateAccount}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
