import styles from './Award.module.scss'
import { FC } from 'react'
import { IAward } from '@/src/types/IFilm'
import { determinateNameHelper } from '@/src/helpers/determinateName.helper'

export const Award: FC<IAward> = ({ imageUrl, name, nominationName, persons, win, year }) => {

    console.log(win);

    return (
        <div className={styles.main}>

            <div className={styles.main__head}>
                <p>{name}  <span> ({year} год)</span></p>
                <span></span>
                <p>{nominationName}</p>
            </div>

            <div>
                {
                    win === false &&
                    <div>
                        <p>номинации:</p>                    </div>

                }
                {/* {win === true &&
                    <div>
                        <p>победитель:</p>
                    </div>
                } */}

            </div>


            {/* <div>{persons.map(person => (
                <p key={person.kinopoiskId}>{determinateNameHelper(person)}</p>
            ))}</div> */}

        </div>
    )
}