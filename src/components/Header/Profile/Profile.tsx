import { useState } from "react"
import Favorites from "../../Favorites"

import styles from './styles.module.scss'
import { SignIn } from "../../Forms/SignIn/SignIn"

const Profile = () => {
    const [user, setUser] = useState(!!localStorage.getItem('user'))
    const [isOpen, setIsOpen] = useState(false)
    const logout = () => {
        setUser(false)
        localStorage.removeItem('user')
    }

    return (
        <div className={styles.profile}>
            {
                !user
                    ? <button onClick={() => setIsOpen(true)}>Войти</button>
                    : <button onClick={logout}>Выйти</button>
            }
            {
                user && <Favorites />
            }
            {isOpen && <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Profile