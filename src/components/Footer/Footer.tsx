'use client';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { ChangeEvent, ChangeEventHandler, FC, useEffect, useRef, useState } from 'react';
import { LogIn } from '../LogIn/LogIn';
import { filmsService } from '../../services/films.service';
import { IFilm, ISearchFilms } from '../../types/IFilm';
import { SearchDropdown } from '../SearchDropdown/SearchDropdown';
import { useDeBounce } from '../../hooks/useDeBounce';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
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
