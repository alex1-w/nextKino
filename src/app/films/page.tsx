import { http } from "@/http/http"
import { Films } from "@/pages/Films/Films"
import { IFilmResponse } from "@/types/IFilm"


async function getFilms() {
    const { data } = await http.get<IFilmResponse>('/v2.2/films')
    return data
}


export default async function FilmsComponent() {
    const films = await getFilms()

    return (
        <Films filmsData={films} />
    )
}