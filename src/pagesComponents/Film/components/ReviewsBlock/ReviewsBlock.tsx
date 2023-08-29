import { IReviews, ReviewItems } from '@/types/IFilm';
import styles from './ReviewsBlock.module.scss';
import { FC } from "react"
import { Comment } from './Comment/Comment';


interface IReviewsBlock {
    reviews: ReviewItems[]
}

const ReviewsBlock: FC<IReviewsBlock> = ({ reviews }) => {

    return (
        <section className={styles.main}>
            {reviews.map((review: ReviewItems) => (
                <Comment
                    review={review}
                    reviewType={review.type}
                    key={review.kinopoiskId}
                />
            ))}
        </section>
    )
};

export default ReviewsBlock;
