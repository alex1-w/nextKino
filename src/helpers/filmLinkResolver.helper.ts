import { IFilm, IPremieresFilm, IPrequels } from "@/types/IFilm"

// export const filmLinkResolver = (link: IFilm | IPremieresFilm | IPrequels ) => {
export const filmLinkResolver = (link: any ) => {
    return link.filmId ? link.filmId : link.kinopoiskId
}