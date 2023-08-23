'use client'
import { Container } from "../../components/Container/Container";
import { FilmItem } from "../../components/FilmItem/FilmItem";
import { Header } from "../../components/Header/Header";
import { IFilm, IFilmResponse } from "../../types/IFilm";
import { FC } from 'react';
import styles from './Films.module.scss';
import { Pagination } from "../../components/Pagination/Pagination";

export const Films: FC<{ filmsData: IFilmResponse }> = ({ filmsData }) => {

    return (
        <div>
            <Header />
            <Container>
                <div>
                    <ul className={styles.filmBlock}>{
                        filmsData.items.map(film => (
                            <FilmItem
                                film={film}
                                key={film.kinopoiskId ? film.kinopoiskId : film.kinopoiskId} />
                        ))}
                    </ul>
                </div>
                <Pagination totalPages={filmsData.totalPages} />

            </Container>
        </div>
    )
}