import { IFilm, IFilmsSimilar, IFullFilm, IPremieresFilm, IStuff, ITopFilms, SimilarItems } from "../types/IFilm";

export const determinateNameHelper = (film: IFilm | ITopFilms |SimilarItems |  IStuff | IPremieresFilm | IFullFilm): string => {
    if (film.nameRu) {
        return film.nameRu
    }
    if (film.nameEn) {
        return film.nameEn
    }
    if (film.hasOwnProperty('nameOriginal')) {
        //@ts-ignore
        return film?.nameOriginal || ''
    }
    return ''
}