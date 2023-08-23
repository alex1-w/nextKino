import { Slider } from '@/components/Slider/Slider';
import styles from './Similar.module.scss';
import { FC } from "react"

const Similar: FC<{ filmsSimilar: any }> = ({ filmsSimilar }) => {
    return (
        <section>
            {filmsSimilar ?
                <>
                    {filmsSimilar.items.length > 5 ?
                        <Slider title='Похожие фильмы' filmsSimilar={filmsSimilar.items.slice(0, 10)} />
                        :
                        <div className={styles.filmsBlock}>
                            {filmsSimilar}
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