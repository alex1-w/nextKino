import Link from "next/link";
import { FC } from "react";
import styles from './Pagination.module.scss'
// /films/page/1

export const Pagination: FC<{ totalPages: number }> = ({ totalPages }) => {
    // console.log([...new Array(totalPages)]);

    return (
        <>
            {totalPages > 1 &&
                <div className={styles.paginationContainer} >{
                    [...new Array(totalPages)].map((_, index) =>
                    (
                        <div key={index} className={styles.pageBlock}>
                            <Link href={`/films/${index + 1}`}>
                                {index + 1}
                            </Link>
                        </div>
                    ))}
                </div>
            }
        </ >
    )
}