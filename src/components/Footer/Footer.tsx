'use client';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { kinoIcon } from '@/icons/icons';
export const navLinks = [
    {
        name: `Главная`,
        link: `/`
    },
    {
        name: `Фильмы`,
        link: `/films`
    },
    {
        name: `Сериалы`,
        link: `/serials`
    },
    {
        name: `Актеры`,
        link: `/actors`
    }
]

export const Footer = () => {

    return (
        <header className={styles.footer}>

            <Link href={'/'}>
                <div className={styles.logoBlock}>
                    {kinoIcon}
                    <p>KINO</p>
                </div>
            </Link>

            {/* <div className={styles.navBlock}>
                    <nav>
                        <ul className={styles.navBlock__ssac}>
                            {navLinks.map(link => (
                                <li key={link.link} className={styles.links}>
                                    <Link href={link.link}>
                                        {link.name}
                                    </Link>
                                </li>))}
                        </ul>
                    </nav>
                </div> */}
        </header>
    )

}
