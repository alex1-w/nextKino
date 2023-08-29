import styles from './Comment.module.scss'
import { FC, useRef, useState } from "react"
import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import cn from 'classnames'
import { ITypes, ReviewItems } from '@/types/IFilm';
import { arrowIcon, userIcon } from '@/icons/icons'

const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
require('dayjs/locale/ru')
dayjs.locale('ru')

interface IComment {
    reviewType: ITypes
    review: ReviewItems
}

export const Comment: FC<IComment> = ({ review, reviewType }) => {
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

            <div className={cn(styles.typeLine, {
                [styles.positive]: reviewType === 'POSITIVE',
                [styles.negative]: reviewType === 'NEGATIVE',
                [styles.neutral]: reviewType === 'NEUTRAL',
                [styles.neutral]: reviewType === 'UNKNOWN',
            })} />

            <motion.div
                initial={{ WebkitLineClamp: 3 }}
                animate={{ WebkitLineClamp: 100 }}
                exit={{ WebkitLineClamp: 3 }}
                className={styles.review__content}
                ref={fullTextRef}
            >
                <p>{review.description}</p>
            </motion.div>

            <div className={styles.arrow} ref={arrowRef}>
                <button onClick={openFullReview}>
                    {arrowIcon}
                </button>
            </div>
            
        </motion.div>
    )
}