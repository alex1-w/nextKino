import { FC, useState } from 'react';
import styles from './LogIn.module.scss';
import cn from 'classnames';

export const LogIn: FC<{ loginClosed: () => void }> = ({ loginClosed }) => {
    // const [closeButton, setCloseButton] = useState<boolean>(false)

    // const closeLogIn = () => {
    //     setCloseButton(true)
    // }

    return (

        <div className={styles.LogInBlock}>
            <div className={styles.wrapper}>

                <div className={styles.title}>
                    <p>Log In</p>
                </div>

                <div>
                    <form className={styles.inputBlock}>
                        <input type="text" placeholder="Введите имя" />
                        <input type="password" placeholder="Введите пароль" />
                        <button type="button"><p>ENTER</p></button>
                    </form>
                    <button onClick={() => { loginClosed() }}><p>X</p></button>
                </div>
            </div>

        </div>
        // <div className={cn(styles.LogInBlock, closeButton && styles.closeBtn)}>
        //     <div className={styles.wrapper}>
        //         <p>Log In</p>
        //         <form>
        //             <input type="text" placeholder="Введите имя" />
        //             <input type="password" placeholder="Введите пароль" />
        //             <button type="button"><p>ENTER</p></button>
        //         </form>
        //         <button onClick={(() => { closeLogIn })}><p>X</p></button>
        //     </div>
        // </div >
    )
}