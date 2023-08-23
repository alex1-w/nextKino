import styles from './Description.module.scss';
import { FC } from "react"

interface IDescription {
    description: string,
    shortDescription: string
}

const Description: FC<IDescription> = ({ description, shortDescription }) => {
    return (
        <section className={styles.main}>
            <h2>Описание:</h2>
            
            <p>{description ? description : shortDescription}</p>
        </section>
    )
};

export default Description;
