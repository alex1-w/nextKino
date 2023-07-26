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
import { kinoIcon } from '@/src/icons/icons';
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

export const Header = () => {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    const [isOpened, setIsOpened] = useState<boolean>(false)

    const loginOpened = () => {
        setIsOpened(true)
    }

    const loginClosed = () => {
        setIsOpened(false)
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [searchValue, setSearchValue] = useState<string>('');
    const [filmsList, setFilms] = useState<IFilm[]>([]);
    const showDropdown = useRef<HTMLDivElement>(null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const getSearchFilms = async () => {
        const { data } = await filmsService.searchFilms(searchValue)

        if (data.films) {
            setFilms([])
            setFilms(data.films.slice(0, 12))
            console.log(444, filmsList);
            showDropdown.current?.classList.add(styles.opened)
        }
    }
    const debounceSearchValue = useDeBounce(searchValue)

    useEffect(() => {
        if (debounceSearchValue.length >= 3) {
            getSearchFilms()
        }
        if (debounceSearchValue === '') {
            showDropdown.current?.classList.remove(styles.opened)
        }
    }, [debounceSearchValue])


    const escEvent = (e: any) => {
        // e.preventDefault();
        // // e.stopPropagation();
        if (e.key === 'Escape') {
            showDropdown.current?.classList.remove(styles.opened)
        }
        if (e.key === 'Enter') {
            window.location.href = `/search`
        }
    }

    const closeDropdown = () => {
        showDropdown.current?.classList.remove(styles.opened)
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

    const BurgerClick = () => {
        setBurgerMenu(!burgerMenu)
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    return (
        <header className={styles.head}>
            <div className={styles.wrapper}>

                <div className={styles.burgerMenu} onClick={() => { BurgerClick() }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    {/* {burgerMenu && <BurgerMenu />} */}
                </div>

                <Link href={'/'}>
                    <div className={styles.logoBlock}>
                        {kinoIcon}
                        <p>KINO</p>
                    </div>
                </Link>

                <div className={styles.navBlock}>
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
                </div>

                <div className={styles.inputBlock} onKeyDown={escEvent} >
                    <div className={styles.inputBlock__inp}>
                        <input type="text" placeholder='Поиск' value={searchValue} onChange={changeHandler} />
                    </div>

                    <div ref={showDropdown} className={styles.inputBlock__inp__dropdown} >
                        <div >
                            <SearchDropdown searchFilms={filmsList} searchValue={searchValue} closeDropdown={closeDropdown} />
                        </div>
                    </div>
                </div>

                <div className={styles.login}>
                    <p onClick={() => loginOpened()}>{isOpened ? <></> : 'Войти'}</p>
                </div>
                {isOpened && <LogIn loginClosed={loginClosed} />}
            </div>
        </header>
    )

}
