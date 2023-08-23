'use client'
import { ITop } from "../../types/IFilm";
import { FC } from "react";
import styles from './TopFilms.module.scss';
import { Header } from "../../components/Header/Header";
import { FilmItem } from "../../components/FilmItem/FilmItem";
import { Pagination } from "../../components/Pagination/Pagination";
// import { determinateNameHelperITopFilm } from "../../helpers/determinateName.helper";

export const TopFilms: FC<{ top: ITop }> = ({ top }) => {

    return (
        <>
            <Header />
            <section className={styles.filmsBlock}>
                <h1>Топ фильмов</h1>
                <div >

                    <ul className={styles.topFilmsGrid}>{
                        top.films.map(film => (
                            <FilmItem key={film.filmId} film={film} />
                        ))}</ul>

                </div>
                <Pagination totalPages={top.pagesCount} />
            </section>
        </>
    )

}