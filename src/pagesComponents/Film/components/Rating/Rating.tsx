import styles from './Rating.module.scss';
import { FC } from "react"

interface IFilmSlogan {
    ratingImdb: number
    ratingKinopoisk: number
}

const Rating: FC<IFilmSlogan> = ({ ratingImdb, ratingKinopoisk }) => {

    return (
        <>
            {ratingImdb && ratingKinopoisk
                ?
                <div className={styles.main}>
                    {ratingImdb && `IMDb - ${ratingImdb}`}

                    <span></span>

                    {ratingKinopoisk && `КП - ${ratingKinopoisk}`}
                </div>
                :
                <></>
            }
        </>
    )
};

export default Rating;
