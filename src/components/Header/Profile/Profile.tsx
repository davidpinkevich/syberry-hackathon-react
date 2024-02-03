import { useState } from "react"
import Favorites from "../../Favorites"

import styles from './styles.module.scss'

const Profile = () => {
    const [user, setUser] = useState(false)
    const login = () => setUser(true)
    const logout = () => setUser(false)

    return (
        <div className={styles.profile}>
            {
                !user
                    ? <button onClick={login}>Войти</button>
                    : <button onClick={logout}>Выйти</button>
            }
            {
                user && <Favorites />
            }
        </div>
    )
}

export default Profile