'use client'
import { Header } from "../../components/Header/Header";
import { IPremieresFilmResponse, ITop } from "../../types/IFilm"
import Head from "next/head";
import { FC, useEffect } from "react"
import { Container } from "@/components/Container/Container";
import { Slider } from "@/components/Slider/Slider";

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