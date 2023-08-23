import { FC } from 'react'
import styles from './FilmAboutComponent.module.scss'
import { ICountry, IGenre } from '@/types/IFilm'

interface IFilmAboutComponent {
    filmLength: number
    year: number
    ratingAgeLimits: string
    countries: ICountry[]
    genres: IGenre[]
}

const sliceAge = (age: string | null): string => {
    if (age !== null) {
        return `${age.replace(`age`, ``)}+`
    }
    return ''
}

export const FilmAboutComponent: FC<IFilmAboutComponent> = ({ countries, filmLength, genres, ratingAgeLimits, year, }) => {

    // countries.map(item => {
    // console.log(item)
    // })
    // console.log(countries.map(item => console.log(Object.values(item))));
    const commaSlicer = (array: any) => {
        return array.map((item: any) => Object.values(item)).join(', ');
    }

    return (
        <div className={styles.main}>
            {genres &&
                <div className={styles.text}>

                    <div className={styles.text__subText}>
                        <p>жанр:</p>
                    </div>
                    <p>{commaSlicer(genres.slice(0, 3))}</p>

                    <span></span>

                </div>
            }
            {countries &&
                <div className={styles.text}>

                    <div className={styles.text__subText}>
                        <p>страна:</p>
                    </div>
                    <p>{commaSlicer(countries.slice(0, 4))}</p>

                    <span></span>

                </div>
            }
            {year &&
                <div className={styles.text}>

                    <div className={styles.text__subText}>
                        <p>год:</p>
                    </div>

                    <p>{`${year} г.`}</p>

                    <span></span>

                </div>
            }
            {filmLength &&
                <div className={styles.text}>

                    <div className={styles.text__subText}>
                        <p>длительность:</p>
                    </div>

                    <p>{`${filmLength} мин`}</p>

                    <span></span>

                </div>
            }
            {ratingAgeLimits &&
                <div className={styles.text}>

                    <div className={styles.text__subText}>
                        <p>возрастной рейтинг:</p>
                    </div>

                    <p>{`${sliceAge(ratingAgeLimits)}`}</p>
                </div>
            }
        </div>
    )
} 