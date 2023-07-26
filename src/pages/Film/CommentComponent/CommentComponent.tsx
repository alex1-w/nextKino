import styles from './CommentComponent.module.scss'
import { ReviewItems } from '@/src/types/IFilm';
import { FC, useRef, useState } from "react"
import { arrowIcon, userIcon } from '@/src/icons/icons';
import { motion } from 'framer-motion'



export const CommentComponent: FC<{ review: ReviewItems }> = ({ review }) => {
    const [isOpened, setIsOpen] = useState<boolean>(false)
    const fullTextRef = useRef<HTMLDivElement>(null)

    const openFullReview = () => {
        setIsOpen(!isOpened)
        fullTextRef.current?.classList.toggle(styles.active)
        console.log(4324);
    }

    return (
        <motion.div ref={fullTextRef} className={styles.review} >
            <div className={styles.review__head}>
                <div className={styles.review__head__userBlock}>
                    {userIcon}
                    <p>{review.author}</p>
                </div>

                <div className={styles.review__head__rightBlock}>
                    <p>{review.date}</p>
                    <button onClick={openFullReview}> {arrowIcon}</button>
                </div>
            </div>

            <div className={styles.review__content}>
                <p>{review.description}</p>
            </div>
        </motion.div>
    )
}