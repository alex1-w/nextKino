'use client'
import { Slider } from "@/src/components/Slider/Slider";
import { Header } from "../../components/Header/Header";
import { IPremieresFilmResponse, ITop } from "../../types/IFilm"
import Head from "next/head";
import { FC, useEffect } from "react"
import { Container } from "@/src/components/Container/Container";

export const HomePage: FC<{ premierFilms: IPremieresFilmResponse, topFilms: ITop }> = ({ premierFilms, topFilms }) => {

    return (
        <Container>
            <Head><title>HomePage</title></Head>
            <Header />
            <Slider data={premierFilms.items.slice(0, 14)} title="Премьмеры месяца" />
            <Slider topFilms={topFilms.films} title="Топ фильмов" link='top-films' />
            {/* <TopHundredFilms topFilms={topFilms} /> */}
            {/* <DisclosureData /> */}
        </Container>
    )
}