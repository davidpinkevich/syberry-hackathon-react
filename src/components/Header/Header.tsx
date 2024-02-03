import Search from "./Search/Search";

import styles from "./style.module.scss";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <Profile />
    </header>
  );
};

export default Header;
