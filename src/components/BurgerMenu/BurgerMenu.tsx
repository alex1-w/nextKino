import Link from "next/link";
import { navLinks } from "../Header/Header";
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {

    return (
        <div className={styles.burgerMenuMain}>
            <h2>KINO</h2>
            <ul>
                {navLinks.map(link => (
                    <li key={link.name} >
                        <Link href={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))}
                <h2>KINO</h2>
            </ul>
        </div>
    )
}