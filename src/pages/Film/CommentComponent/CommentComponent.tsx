import styles from './CommentComponent.module.scss'
import { ReviewItems } from '@/src/types/IFilm';
import { FC, useRef, useState } from "react"
import { arrowIcon, userIcon } from '@/src/icons/icons';
import { motion, AnimatePresence } from 'framer-motion'
import dayjs from 'dayjs'
import cn from 'classnames'
import { ITypes } from '../Film';

const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
require('dayjs/locale/ru')
dayjs.locale('ru')

interface ICommentComponent {
    reviewType: ITypes
    review: ReviewItems
}

export const CommentComponent: FC<ICommentComponent> = ({ review, reviewType }) => {
    const [isOpened, setIsOpen] = useState<boolean>(false)
    const fullTextRef = useRef<HTMLDivElement>(null)
    const arrowRef = useRef<HTMLDivElement>(null)

    const openFullReview = () => {
        setIsOpen(!isOpened)
        fullTextRef.current?.classList.toggle(styles.fullContent)
        arrowRef.current?.classList.toggle(styles.arrowRotate)
    }

    return (
        <motion.div className={styles.review}>
            <div className={styles.review__head}>
                <div className={styles.review__head__userBlock}>
                    {userIcon}
                    <p>{review.author}</p>
                </div>

                <p>{dayjs(review.date).format('YYYY MMMM DD')}</p>
            </div>

            <div
                className={cn(styles.typeLine, {
                    [styles.positive]: reviewType === 'POSITIVE',
                    [styles.negative]: reviewType === 'NEGATIVE',
                    [styles.neutral]: reviewType === 'NEUTRAL',
                    [styles.neutral]: reviewType === 'UNKNOWN',
                })}
            ></div>

            <motion.div
                initial={{ WebkitLineClamp: 3 }}
                animate={{ WebkitLineClamp: 100 }}
                exit={{ WebkitLineClamp: 3 }}
                className={styles.review__content}
                ref={fullTextRef}
            >
                <p>{review.description}</p>
            </motion.div>

            <div
                className={styles.arrow}
                ref={arrowRef}
            >
                <button onClick={openFullReview}>
                    {arrowIcon}
                </button>
            </div>
        </motion.div>
    )
}