import { IFilmFact } from '@/types/IFilm';
import { FactComponent } from '../FactComponent/FactComponent';
import styles from './FactsAndBloopers.module.scss';
import { FC, useState } from "react"

interface IFactsAndBloopers {
    filmFacts: {
        items: IFilmFact[]
    }
}

const FactsAndBloopers: FC<IFactsAndBloopers> = ({ filmFacts }) => {
    const [factsVariant, setFactsVariant] = useState<'FACT' | 'BLOOPER'>('FACT')

    return (
        <section className={styles.main}>

            <nav className={styles.filmFactBlock__navigation}>
                <ul>

                    <li onClick={() => setFactsVariant('FACT')}>
                        <p>Факты</p>
                    </li>

                    <li onClick={() => setFactsVariant('BLOOPER')}>
                        <p>Ошибки в фильме</p>
                    </li>

                </ul>
            </nav>

            {factsVariant === 'BLOOPER'
                ?
                <>
                    {filmFacts.items.filter(item => item.type === 'BLOOPER').map(fact => (
                        <FactComponent
                            spoiler={fact.spoiler}
                            text={fact.text}
                            type={fact.type}
                            key={fact.text}
                        />
                    ))}
                </>
                :
                filmFacts.items.filter(item => item.type === 'FACT').map(fact => (
                    <FactComponent
                        spoiler={fact.spoiler}
                        text={fact.text}
                        type={fact.type}
                        key={fact.text}
                    />
                ))
            }

        </section>
    )
};

export default FactsAndBloopers;
