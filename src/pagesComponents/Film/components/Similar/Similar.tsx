import styles from './Similar.module.scss';
import { Slider } from '@/components/Slider/Slider';
import { FC } from "react"
import { IFilmsSimilar } from '@/types/IFilm';
import { FilmItem } from '@/components/FilmItem/FilmItem';


const Similar: FC<{ filmsSimilar: IFilmsSimilar }> = ({ filmsSimilar }) => {

    return (
        <section>
            {filmsSimilar
                ?
                <>
                    <h2>Похожие фильмы</h2>

                    {filmsSimilar.items.length > 5 ?
                        <Slider title='Похожие фильмы' item={filmsSimilar.items.slice(0, 13)} />
                        :
                        <div className={styles.filmsBlock}>
                            {
                                filmsSimilar.items.map(film =>
                                    <FilmItem film={film} key={film.filmId} />
                                )
                            }
                        </div>
                    }
                </>
                :
                <></>
            }
        </section>
    )
};

export default Similar;