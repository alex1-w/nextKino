'use client';
import styles from './Header.module.scss';
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
        name: `Жанры`,
        link: `/genres`
    }
]

// useRouter

export const Header = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filmsList, setFilms] = useState<IFilm[]>([]);
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
    const showDropdown = useRef<HTMLDivElement>(null);

    const closeDropdown = () => showDropdown.current?.classList.remove(styles.opened)
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)
    const burgerClick = () => setBurgerMenu(!burgerMenu)
    const debounceSearchValue = useDeBounce(searchValue)

    const getSearchFilms = async () => {
        const { data } = await filmsService.searchFilms(searchValue)

        if (data.films) {
            setFilms([])
            setFilms(data.films.slice(0, 12))
            showDropdown.current?.classList.add(styles.opened)
        }
    }

    useEffect(() => {
        if (debounceSearchValue.length >= 3) getSearchFilms()
        if (debounceSearchValue === '') showDropdown.current?.classList.remove(styles.opened)
    }, [debounceSearchValue])

    const escEvent = (e: any) => {
        if (e.key === 'Escape') showDropdown.current?.classList.remove(styles.opened)
        if (e.key === 'Enter') window.location.href = `/search`
    }

    return (
        <header className={styles.head}>

            <div className={styles.burgerMenu} onClick={burgerClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Link href={'/'}>
                <div className={styles.logoBlock}>
                    {kinoIcon}
                    <p>KINO</p>
                </div>
            </Link>

            <nav className={styles.navBlock}>
                <ul className={styles.navBlock__ssac}>
                    {navLinks.map(link => (
                        <li key={link.link} className={styles.links}>
                            <Link href={link.link}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.inputBlock} onKeyDown={escEvent} >
                <div className={styles.inputBlock__inp}>
                    <input
                        type="text"
                        placeholder='Поиск'
                        value={searchValue}
                        onChange={changeHandler}
                    />
                </div>

                <div ref={showDropdown} className={styles.inputBlock__inp__dropdown} >
                    <div>
                        <SearchDropdown
                            searchFilms={filmsList}
                            searchValue={searchValue}
                            closeDropdown={closeDropdown}
                        />
                    </div>
                </div>
            </div>

        </header >
    )

}
