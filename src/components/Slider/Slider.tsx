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
import { filmLinkResolver } from '@/helpers/filmLinkResolver.helper';

interface ISlider {
    // data?: IPremieresFilm[]
    // topFilms?: ITopFilms[]
    // filmsSimilar?: SimilarItems[]
    title?: string
    link?: string
    item: any
}

export const Slider: FC<ISlider> = ({ item, title, link }) => {

    return (
        <div className={styles.main}>

            {!link
                ?
                <h2>{title}</h2>
                :
                <Link href={link} className={styles.linkHeading}>
                    <h2>{title}</h2>
                    {arrowIcon}
                </Link>
            }

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                navigation
                scrollbar={{ draggable: true }}
                slidesPerView={5}
                className={styles.swiper}
                pagination={{ clickable: true }}
            >
                {item?.map((slide: any) => (
                    <SwiperSlide key={slide.kinopoiskId}>
                        <Link href={`film/${filmLinkResolver(slide)}`} className={styles.slide}>

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


                <span slot="container-end" className={styles.sliderNavigation}>
                    <SlidePrevButton />
                    <SlideNextButton />
                </span>
            </Swiper>
        </div>
    )
}