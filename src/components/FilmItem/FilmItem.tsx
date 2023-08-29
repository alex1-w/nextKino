import styles from './FilmItem.module.scss';
import Image from "next/image";
import Link from "next/link";
import { FC } from 'react';
import { ITopFilms, IFilm } from "@/types/IFilm";
import { determinateNameHelper } from '@/helpers/determinateName.helper';
import { filmLinkResolver } from '@/helpers/filmLinkResolver.helper';

export const FilmItem: FC<{ film: IFilm | ITopFilms }> = ({ film }) => {

    return (
        <Link href={`film/${filmLinkResolver(film)}`}>
            <li className={styles.liBlock}>

                <div className={styles.liWrapper}>
                    <Image src={film.posterUrlPreview} width={'200'} height={'300'} className={styles.image} alt={determinateNameHelper(film)} />

                    <div className={styles.footer}>

                        <div className={styles.filmDescription}>
                            <p>
                                {determinateNameHelper(film)}
                            </p>
                        </div>

                        <div className={styles.rating}>
                            <p className={styles.rating__kinopoisk}>{film.ratingKinopoisk}</p>
                        </div>
                    </div>
                </div>

            </li>

        </Link>
        // <></>
    )
}