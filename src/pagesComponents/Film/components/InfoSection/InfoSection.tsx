import styles from './InfoSection.module.scss';
import { FC, useState } from 'react';
import { IFilmAwards, IFilmFact, IFilmFacts, IFilmImages, IFilmTrailer, IReviews } from '@/types/IFilm';
import Awards from './Awards/Awards';
import ReviewsBlock from '../ReviewsBlock/ReviewsBlock';
import FactsAndBloopers from './FactsAndBloopers/FactsAndBloopers';

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
    // {
    //     name: 'Трейлер',
    //     value: 'trailer'
    // },
    // {
    //     name: 'Фото',
    //     value: 'photo'
    // },
    {
        name: 'Награды',
        value: 'awards'
    },
]

interface InfoSection {
    filmReviews: IReviews,
    filmFacts: IFilmFacts,
    filmImages: IFilmImages,
    filmAwards: IFilmAwards
    filmTrailer: IFilmTrailer
}
type Variant = "reviews" | "facts" | "photos" | "photo" | "awards" | 'trailer'

export const InfoSection: FC<InfoSection> = ({ filmFacts, filmReviews, filmImages, filmAwards, filmTrailer }) => {
    const [variant, setVariant] = useState<string | Variant>("reviews")


    console.log(filmFacts);

    const variantBlock = {
        ['reviews']: <ReviewsBlock reviews={filmReviews.items} />,
        ['awards']: <Awards filmAwards={filmAwards} />,
        ['facts']: <FactsAndBloopers filmFacts={filmFacts} />
    }

    return (
        <div className={styles.main}>

            <nav className={styles.navigation}>
                <ul>
                    {pageVariants.map(variant => (
                        <li key={variant.name} onClick={() => setVariant(variant.value)}>
                            <p>
                                {variant.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* variantBlock[variant as 'awards' | 'reviews'] */}

            {variant === 'reviews' && variantBlock['reviews']}

            {variant === 'awards' && variantBlock['awards']}

            {variant === 'facts' && variantBlock['facts']}

        </div >
    )
}