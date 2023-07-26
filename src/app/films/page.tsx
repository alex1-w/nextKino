import { http } from "@/src/http/http";
import { Films } from "@/src/pages/Films/Films";
import { TopFilms } from "@/src/pages/TopFilms/TopFilms";
import { IFilmResponse } from "@/src/types/IFilm";

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