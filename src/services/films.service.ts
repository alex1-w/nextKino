import { http } from "../http/http"
import { ISearchFilms } from "../types/IFilm"

export const filmsService = {
    async searchFilms(keyword: string, page: number = 1) {
        return await http.get<ISearchFilms>(`/v2.1/films/search-by-keyword`,
            {
                params: { keyword, page }
            })
    }
}