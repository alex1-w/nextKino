import { IFilmFact } from '@/types/IFilm'
import styles from './FactComponent.module.scss'
import { FC } from "react"


export const FactComponent: FC<IFilmFact> = ({ spoiler, text, type }) => {
    // console.log(type);

    return (
        <div className={styles.main}>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    )
}