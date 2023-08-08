'use client'
import { determinateFilmCaseHelper } from "@/helpers/determinateFilmCase";
import { ISearchFilms } from "@/types/IFilm";
import { FC } from "react"
import { Header } from "../Header/Header";
import { Container } from "../Container/Container";
import Link from "next/link";
import { FilmItem } from "../FilmItem/FilmItem";
// import { useRouter } from "next/router";
// import stylesfilmBlock from '../Films.module.scss';
import stylesfilmBlock from '../../pages/Films/Films.module.scss';
import styles from './Search.module.scss'

const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
</svg>

export const Search: FC<{ searchData: ISearchFilms }> = ({ searchData }) => {
    // console.log(searchData);
    // const router = useRouter();

    const pageChangeHandler = (page: { selected: number }) => {
        // router.push(``)
        window.location.href = `/search/${page.selected}/?search=${searchData.keyword}`
    }

    return (
        <>
            <Header />
            <Container>
                <h1 className={styles.title}>Найдено по запросу &nbsp;
                    {`"${searchData.keyword}"`}&ensp;
                    {searchData.searchFilmsCountResult}&ensp;
                    {determinateFilmCaseHelper(searchData.searchFilmsCountResult)}
                </h1>
                <section className={styles.mainSection}>
                    <ul className={stylesfilmBlock.filmBlock}>
                        {searchData.films?.map(film => (
                            <FilmItem key={film.kinopoiskId} film={film} />
                        ))}
                    </ul>
                </section>

                {searchData.pagesCount > 1 &&
                    <div className={styles.paginationBlock}>
                        {/* <ReactPaginate
                            className={styles.paginationBlock__pagination}
                            pageLinkClassName={styles.pageLinkClassName}
                            onPageChange={pageChangeHandler}
                            pageCount={Math.round(searchData.searchFilmsCountResult / 20)}
                            pageRangeDisplayed={3}
                            previousLabel={"<"}
                            nextLabel={'>'}
                            pageClassName={styles.pageClassName}
                        /> */}
                    </div>}
            </Container>

        </>
    )
}