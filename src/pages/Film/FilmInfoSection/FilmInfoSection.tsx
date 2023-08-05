import { FC, useEffect, useState } from 'react';
import styles from './FilmInfoSection.module.scss';
import { IFilmAwards, IFilmFact, IFilmFacts, IFilmImages, IFilmTrailer, IReviews } from '@/src/types/IFilm';
import { CommentComponent } from '../CommentComponent/CommentComponent';
import { FactComponent } from './FactComponent/FactComponent';
import Image from 'next/image';
import { Award } from './Award/Award';

const pageVariants = [
    {
        name: 'Рецензии',
        value: 'reviews'
    },
    {
        name: 'Интересные факты',
        value: 'facts'
    },
    {
        name: 'Бюджет и сборы',
        value: 'bugetAndAmount'
    },
    {
        name: 'Трейлер',
        value: 'trailer'
    },
    {
        name: 'Фото',
        value: 'photo'
    },
    {
        name: 'Награды',
        value: 'awards'
    },
]

interface IFilmInfoSection {
    filmReviews: IReviews,
    filmFacts: IFilmFacts,
    filmImages: IFilmImages,
    filmAwards: IFilmAwards
    filmTrailer: IFilmTrailer
}
type Variant = "reviews" | "facts" | "photos" | "photo" | "awards" | 'trailer'

export const FilmInfoSection: FC<IFilmInfoSection> = ({ filmFacts, filmReviews, filmImages, filmAwards }) => {
    const [variant, setVariant] = useState<string | Variant>("reviews")
    const changeVariant = (variant: string) => setVariant(variant)

    console.log(filmAwards.items);

    const [factsVariant, setFactsVariant] = useState<'FACT' | 'BLOOPER'>('BLOOPER')

    return (
        <div className={styles.main}>
            <nav className={styles.navigation}>
                <ul>
                    {pageVariants.map(variant => (
                        <li
                            key={variant.name}
                            onClick={() => changeVariant(variant.value)}
                        >
                            <p>{variant.name}</p>
                        </li>
                    ))}
                </ul>
            </nav>

            {variant === 'reviews' &&
                <section className={styles.reviewsBlock}>
                    {filmReviews.items.slice(0, 7).map(review => (
                        <CommentComponent reviewType={review.type} review={review} key={review.kinopoiskId} />
                    ))}
                </section>
            }

            {variant === 'facts' &&

                <section className={styles.filmFactBlock}>

                    <nav className={styles.filmFactBlock__navigation}>
                        <ul>
                            <li onClick={() => setFactsVariant('FACT')}>Факты</li>
                            <li onClick={() => setFactsVariant('BLOOPER')}>Ошибки в фильме</li>
                        </ul>
                    </nav>
                    {/* {filteredFasts.map(fact => ( */}
                    {factsVariant === 'BLOOPER'
                        ?
                        filmFacts.items.filter(item => item.type === 'BLOOPER').map(fact => (
                            <FactComponent
                                spoiler={fact.spoiler}
                                text={fact.text}
                                type={fact.type}
                                key={fact.text}
                            />
                        ))
                        :
                        filmFacts.items.filter(item => item.type === 'FACT').map(fact => (
                            <FactComponent
                                spoiler={fact.spoiler}
                                text={fact.text}
                                type={fact.type}
                                key={fact.text}
                            />))
                    }

                </section>
            }

            {variant === 'awards' &&

                <section className={styles.awardsBlock}>
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
            }


            {variant === 'trailer'
                &&
                <section></section>
            }

        </div >
    )
}