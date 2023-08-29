import { FC } from 'react'
import styles from './About.module.scss'
import { ICountry, IGenre } from '@/types/IFilm'

interface IAbout {
    filmLength: number
    year: number
    ratingAgeLimits: string
    countries: ICountry[]
    genres: IGenre[]
}

const commaSlicer = (array: any) => array.map((item: any) => Object.values(item)).join(', ');

const sliceAge = (age: string | null): string => {
    if (age !== null) {
        return `${age.replace(`age`, ``)}+`
    }
    return ''
}




export const About: FC<IAbout> = ({ countries, filmLength, genres, ratingAgeLimits, year, }) => {

    // const aboutArray = [
    //     {
    //         title: 'жанр:',
    //         value: commaSlicer(genres.slice(0, 3))
    //     },
    //     {
    //         title: 'страна:',
    //         value: commaSlicer(countries.slice(0, 4))
    //     },
    //     {
    //         title: 'год:',
    //         value: `${year} г.`
    //     },
    //     {
    //         title: 'длительность:',
    //         value: `${filmLength} мин`
    //     },
    //     {
    //         title: 'возрастной рейтинг:',
    //         value: `${sliceAge(ratingAgeLimits)}`
    //     },
    // ]

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