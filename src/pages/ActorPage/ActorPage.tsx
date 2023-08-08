'use client';
import styles from "./ActorPage.module.scss"
import { Fragment, createServerContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/scss/scrollbar'
// import 'swiper/swiper.css';
import dayjs from 'dayjs';

import { IActor } from "@/types/IActor"
import { IStaff } from "@/types/IFilm"
import Image from "next/image"
import { FC } from "react"
import { Container } from "@/components/Container/Container"
import { Header } from "@/components/Header/Header"
import Link from 'next/link';
import { DisclosureData } from "@/components/DisclosureData/DisclosureData";
import { SetTitleHead } from "@/helpers/setTitleHead";

const resolveAgeWord = (year: number) => {
    const strYear = String(year).slice(-1);
    // } else if (strYear === '0' || '5' || '6' || '7' || '8' || '9') {
    if (strYear === '2' || '3' || '4') {
        return ` ${year} года`
    }
    return ` ${year} лет`
}

export const ActorPage: FC<{ actorData: IActor }> = ({ actorData }) => {
    SetTitleHead("ActorPage")

    const actorDataDescription = [
        {
            name: "Профессия",
            value: ` ${actorData.profession}`,
            mainValue: actorData.profession
        },
        {
            name: "Пол",
            value: ` ${(actorData.sex === 'MALE' ? "Мужской" : "Женский")}`,
            mainValue: actorData.sex
        },
        {
            name: "Возраст",
            value: resolveAgeWord(actorData.age),
            mainValue: actorData.age
        },
        {
            name: "Рост",
            value: ` ${actorData.growth}см`,
            mainValue: actorData.growth
        },
        {
            name: "Дата рождения",
            value: ` ${dayjs(actorData.birthday).format('DD.MM.YYYY')}`,
            mainValue: actorData.birthday

        },
        {
            name: "Место рождения",
            value: ` ${actorData.birthplace}`,
            mainValue: actorData.birthplace
        },
        {
            name: "Дата смерти",
            value: (dayjs(actorData.death).format('DD.MM.YYYY') ? dayjs(actorData.death).format('DD.MM.YYYY') : null),
            mainValue: actorData.death
        },
        {
            name: "Место смерти",
            value: actorData.deathplace,
            mainValue: actorData.deathplace
        },
        {
            name: "Количество наград",
            value: ` ${actorData.hasAwards}`,
            mainValue: actorData.hasAwards
        },
    ]

    const actorResolve = (key: string) => {
        return actorData.films.filter(staff => staff.professionKey === key);
    }

    const actorsProfessions = [
        {
            name: "Сценарий",
            value: actorResolve('WRITER'),
        },
        {
            name: "Актер",
            value: actorResolve('ACTOR'),
        },
        {
            name: "Режиссер",
            value: actorResolve('DIRECTOR'),
        },
        {
            name: "Оператор",
            value: actorResolve('OPERATOR')
        },
        {
            name: "Продюсер",
            value: actorResolve('PRODUCER')
        },
        {
            name: "Монтажер",
            value: actorResolve('EDITOR')
        },
    ]

    return (

        <Container>
            <Header />
            <div className={styles.actorBlock}>

                <section className={styles.actorBlock__header}>
                    <div className={styles.actorBlock__header__wrapper}>
                        <Image src={actorData.posterUrl} width={230} height={360} className={styles.image} alt={actorData.nameEn || actorData.nameRu || String(actorData.personId)} />
                        <div className={styles.actorBlock__header__rightPart}>

                            <div className={styles.actorsProfession}>
                                <h1>
                                    {actorData.nameRu ? actorData.nameRu : actorData.nameEn}
                                </h1>
                            </div>

                            <div className={styles.actorBlock__description}>

                                {actorData.sex === 'MALE' ? <h2>Об актере:</h2> : <h2>Об актрисе:</h2>}

                                {actorDataDescription.map(actorDescription => (
                                    (actorDescription.mainValue !== null && actorDescription.mainValue !== 0) ?
                                        <Fragment key={actorData.personId} >
                                            <div className={styles.professionList}>
                                                {actorDescription.value ? <p>{actorDescription.name}:{actorDescription.value}</p> : null}
                                            </div>
                                        </Fragment> : null
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                <section className={styles.actorsFilmsBlock}>

                    <div>
                        {actorsProfessions.map(profession => (
                            profession.value.length >= 1 ?
                                <DisclosureData
                                    key={profession.name}
                                    name={profession.name}
                                >
                                    <>{profession.value.map(film => (

                                        <Link key={film.filmId} href={`/film/${film.filmId}`}>
                                            <p >
                                                {`${film.nameRu}, ` ? `${film.nameRu}, ` : `${film.nameEn}`}
                                                {/* {`${film.nameEn}`} */}
                                            </p>
                                        </Link>
                                    ))}</>
                                </DisclosureData>
                                : null
                        ))}
                    </div>
                </section>

            </div >


        </Container >
    )
}