import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
// import 'swiper/scss/scrollbar'
// import 'swiper/scss/hash-navigation'
// import 'swiper/scss/effect-coverflow'
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/mousewheel'
import Image from 'next/image';
import Link from 'next/link';
import styles from './ActorSlider.module.scss'
import { FC } from 'react';
import { IStaff } from '../../types/IFilm';
import { determinateNameHelper } from '../../helpers/determinateName.helper';

export const ActorSlider: FC<{ actorsItem: IStaff[] }> = ({ actorsItem }) => {
    return (
        <Swiper
            pagination={{ el: 'swiper-pagination', clickable: true }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            spaceBetween={30}
            slidesPerView={7}
            scrollbar={{ draggable: true }}
            grabCursor={true}
            className={styles.swiper}
        >
            {actorsItem.map(film =>
            (
                <SwiperSlide key={film.staffId} className={styles.sliderItem}
                >
                    <Link href={`film/${film.staffId}`} className={styles.slideLink}>
                        <div className={styles.imageBlock}>
                            <Image src={film.posterUrl} fill alt={film.nameEn || String(film.staffId)} />
                        </div>
                        <p>{determinateNameHelper(film)}</p>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}