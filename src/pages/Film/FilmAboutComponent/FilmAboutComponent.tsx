import { FC } from 'react'
import styles from './FilmAboutComponent.module.scss'
import { ICountry, IGenre } from '@/src/types/IFilm'

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

    console.log(countries);

    return (
        <div className={styles.main}>
            {year &&
                <div className={styles.text}>
                    <p>{`${year} г.`}</p>
                    <span></span>
                </div>
            }
            {filmLength &&
                <div className={styles.text}>
                    <p>{`${filmLength} мин`}</p>
                    <span></span>
                </div>
            }
            {ratingAgeLimits &&
                <div className={styles.text}>
                    <p>{`${sliceAge(ratingAgeLimits)}`}</p>
                    <span></span>
                </div>
            }
            {countries &&
                <div className={styles.text}>
                    {countries.slice(0, 4).map(item => (
                        <p key={item.country}>{item.country},</p>
                    ))}
                    <span></span>
                </div>
            }
            {genres &&
                <div className={styles.text}>
                    {genres.slice(0, 4).map(item => (
                        <p key={item.genre}>{item.genre},</p>
                    ))}
                </div>
            }
        </div>
    )
} 