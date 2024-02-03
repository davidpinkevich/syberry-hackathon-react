import { useState } from "react"
import Favorites from "../../Favorites"

import styles from './styles.module.scss'
import { SignIn } from "../../Forms/SignIn/SignIn"
import { removeUser } from "../../../redux/slices/userSlice"
import { useAppDispatch, useAppSelector } from '../../../hooks/index'

const Profile = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.userSlice)

    const [isOpen, setIsOpen] = useState(false)
    const logout = () => {
        dispatch(removeUser())
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