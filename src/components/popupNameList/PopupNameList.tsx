import { IStaff } from "@/types/IFilm"
import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import styles from './PopupNameList.module.scss'


export const PopupNameList: FC<{ filmStaffs: IStaff[] }> = ({ filmStaffs }) => {
    console.log(filmStaffs);

    return (
        <div className={styles.mainBlock}>
            <div className={styles.mainBlock__wrapper}>
                {filmStaffs.map(staff => (
                    <p key={staff.staffId}>{staff.nameRu ? staff.nameRu : staff.nameEn}</p>
                ))}
            </div>
        </div>
    )
}
// <div className={styles.filmStaffBlock}>{
//     filmStaffArr.map(filmData =>

//         <div key={filmData.name} className={styles.namesBlock}>{
//             filmData.value.length ?
//                 <div className={styles.namesBlock__wrapper}>
//                     <p className={styles.staffNames}>{filmData.name}</p>

//                     <div className={styles.personList}>
//                         {filmData ? filmData.value.map(person =>
//                             <Link key={person.staffId} href={`/actor/${person.staffId}`} className={styles.personList__item}>
//                                 <p>
//                                     {`${person.nameRu}, ` ? `${person.nameRu}, ` : `${person.nameEn}, ` ? `${person.nameEn}, ` : null}
//                                 </p>
//                             </Link>
//                         ) : null}
//                     </div>
//                 </div>
//                 : null}
//         </div>)}

// </div>