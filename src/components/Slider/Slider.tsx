import styles from './Slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SlidePrevButton from './SlidePrevButton/SlidePrevButton';
import SlideNextButton from './SlideNextBtn/SlideNextBtn';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/scss/pagination';
import { arrowIcon } from '@/icons/icons';
import { determinateNameHelper } from '@/helpers/determinateName.helper';
import { IFilmsSimilar, IPremieresFilm, ITop, ITopFilms, SimilarItems } from '@/types/IFilm';
// import 'swiper/scss/scrollbar';

interface ISlider {
    data?: IPremieresFilm[]
    topFilms?: ITopFilms[]
    filmsSimilar?: SimilarItems[]
    title: string
    link?: string
}

export const Slider: FC<ISlider> = ({ data, title, topFilms, filmsSimilar, link }) => {

    return (
        <div className={styles.main}>

            {!link ? <h2>{title}</h2> :
                <Link href={link} className={styles.linkHeading}>
                    <h2>{title}</h2>
                    {arrowIcon}
                </Link>}

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                navigation
                scrollbar={{ draggable: true }}

                slidesPerView={5}
                className={styles.swiper}
                pagination={{ clickable: true }}
            >

                {data && data?.map(slide => (
                    <SwiperSlide key={slide.kinopoiskId} >
                        <Link href={`film/${slide.kinopoiskId}`} className={styles.slide}>
                            <div className={styles.slide__imageBlock}>
                                <Image
                                    alt={determinateNameHelper(slide)}
                                    src={slide.posterUrl}
                                    width={180}
                                    height={240}
                                />
                            </div>
                            <div className={styles.slide__filmName}>
                                <p>{determinateNameHelper(slide)}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}


                {topFilms && topFilms?.map(slide => (
                    <SwiperSlide
                        key={slide.filmId}
                        className={styles.sliderItem}
                    >
                        <Link
                            key={slide.filmId}
                            href={`film/${slide.filmId}`}
                            className={styles.slide}
                        >
                            <div
                                key={slide.filmId}
                                className={styles.slide__imageBlock}>
                                <Image
                                    src={slide.posterUrlPreview}
                                    key={slide.filmId}
                                    width={180}
                                    height={240}
                                    className={styles.swipeImg}
                                    alt={String(slide.nameEn)} />
                                <p>{determinateNameHelper(slide)}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}

                {filmsSimilar && filmsSimilar?.map(slide => (
                    <SwiperSlide
                        key={slide.filmId}
                        className={styles.sliderItem}
                    >
                        <Link
                            key={slide.filmId}
                            href={`film/${slide.filmId}`}
                            className={styles.slide}
                        >
                            <div
                                key={slide.filmId}
                                className={styles.slide__imageBlock}>
                                <Image
                                    src={slide.posterUrl}
                                    key={slide.filmId}
                                    width={180}
                                    height={240}
                                    className={styles.swipeImg}
                                    alt={String(slide.nameEn)} />
                                <p>{determinateNameHelper(slide)}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}

                <span slot="container-end" className={styles.sliderNavigation}>
                    <SlidePrevButton />
                    <SlideNextButton />
                </span>
            </Swiper>

        </div>
    )
}