'use client'
import { IFilm, ISearchFilms } from "../../types/IFilm";
import styles from './SearchDropdown.module.scss';
import Link from "next/link";
import { FC, useRef } from "react";
import Image from "next/image";
import { determinateNameHelper } from "../../helpers/determinateName.helper";
import { motion } from "framer-motion";
import { useOnClickOutside } from "../../hooks/useClickOutside";

interface ISearchDropdownProps {
    searchFilms: IFilm[];
    searchValue: string;
    closeDropdown: () => void
}
export const SearchDropdown: FC<ISearchDropdownProps> = ({ searchFilms, searchValue, closeDropdown }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(dropdownRef, closeDropdown)

    return (
        <motion.div className={styles.dropdownBlock} ref={dropdownRef}>
            {searchFilms.length ?
                <>
                    <ul>
                        {searchFilms.map(film => (
                            <li key={film.kinopoiskId}>
                                <Link href={`film/${film.kinopoiskId}`}>
                                    <div className={styles.filmBlock}>
                                        <Image width={50} height={70} src={film.posterUrlPreview} alt={film.nameOriginal || film.nameEn || String(film.kinopoiskId)} />
                                        <div className={styles.descriptionBlock}>
                                            <p>{determinateNameHelper(film)}</p>
                                            <p className={styles.subtitle}>
                                                {(film.ratingKinopoisk && film.ratingImdb) ? `КП - ${film.ratingKinopoisk}  |  IMDb - ${film.ratingImdb}` : `КП ${film.ratingImdb}, `}
                                            </p>
                                            <p className={styles.subtitle}>
                                                {`${film.countries.map(country => country.country).join(", ")} | ${film.genres.map(genre => genre.genre).join(", ")}`}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href={`/search/?search=${searchValue}`}>
                        <p>Посмотреть все...</p>
                    </Link>
                </>
                : <div className={styles.notFounded}>
                    <p>Ничего не найдено</p>
                </div>
            }
        </motion.div>
    )
}