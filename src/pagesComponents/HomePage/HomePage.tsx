'use client'
import { IPremieresFilmResponse, ITop } from "../../types/IFilm"
import Head from "next/head";
import { FC, useEffect } from "react"
import { Container } from "@/components/Container/Container";
import { Slider } from "@/components/Slider/Slider";

export const HomePage: FC<{ premierFilms: IPremieresFilmResponse, topFilms: ITop }> = ({ premierFilms, topFilms }) => {


console.log(topFilms.films, premierFilms.items );


    return (
        <Container>

            <Slider item={premierFilms.items.slice(0, 14)} title="Премьмеры месяца" />

            <Slider item={topFilms.films} title="Топ фильмов" link='top-films' />

        </Container>
    )
}