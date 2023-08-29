import { IAward } from '@/types/IFilm';
import { Award } from './Award/Award';
// import styles from './Awards.module.scss';
import { FC } from "react"

interface IFilmAwards {
    filmAwards: {
        items: IAward[]
    }
}

const Awards: FC<IFilmAwards> = ({ filmAwards }) => {
    return (
        // <section className={styles.awardsBlock}>
        
        <section>
            {filmAwards.items.map(item => (
                <Award
                    imageUrl={item.imageUrl}
                    name={item.name}
                    nominationName={item.nominationName}
                    persons={item.persons}
                    win={item.win}
                    year={item.year}
                    key={item.imageUrl}
                />
            ))}
        </section>
    )
};

export default Awards;
