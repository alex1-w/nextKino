import { ITypes } from "../types/IFilm"

export const resolveType = (review: ITypes): string | undefined => {
    if (review === 'POSITIVE') {
        return 'Положительный отзыв'
    }
    if (review === 'NEGATIVE') {
        return 'Негативны отзыв'
    }
    if (review === 'NEUTRAL') {
        return 'Нейтральный отзыв'
    }
    if (review === 'UNKNOWN') {
        return ''
    }
}