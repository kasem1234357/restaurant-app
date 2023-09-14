import { INavbar } from './Navbar';

const base: INavbar = {
  onLogin: () => {
    console.log('activaited');
  },
  onLogout: () => {
    console.log('unactivaited');
  },
  onCreateAccount() {
    console.log('activaited');
  },
};

export const mockNavbarProps = {
  base,
};
