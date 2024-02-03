import Search from "./Search/Search"
import Profile from "./Profile/Profile"

import styles from './style.module.scss'
import Logo from "./Logo/Logo"

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Search />
            <Profile />
        </header>
    )
}

export default Header