import { http } from "../http/http"
import { IFullFilm, IReviews, IStuff } from "../types/IFilm"

export const filmService = {
    async getFilm(id: string) {
        const { data: filmData } = await http.get<IFullFilm>(`/v2.2/films/${id}`)
        return filmData
    },
    async getFilmSimilar(id: string) {
        const { data: filmsSimilar } = await http.get(`/v2.2/films/${id}/similars`)
        return filmsSimilar
    },
    async getFilmReviews(id: string) {
        const { data: filmReviews } = await http.get<IReviews>(`/v2.2/films/${id}/reviews`)
        return filmReviews
    },
    async getFilmStaffs(id: string) {
        const { data: filmStaffs } = await http.get<IStuff[]>(`/v1/staff/`, { params: { filmId: id } })
        return filmStaffs
    },
}