import { http } from "@/src/http/http";
import { Film } from "@/src/pages/Film/Film";
import { filmService } from "@/src/services/filmDataFetching";
import { IFullFilm, IPrequels, IReviews, IStaff } from "@/src/types/IFilm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Film'
}

export async function getFilm(id: string) {
    // const { data: filmStaffs } = await http.get<IStaff[]>(`/v1/staff/`, { params: { filmId: id } })
    // const { data: filmsPrequels } = await http.get<IPrequels>(`/v2.1/films/${id}/sequels_and_prequels`)
    const { data: filmData } = await http.get<IFullFilm>(`/v2.2/films/${id}`)
    const { data: filmsSimilar } = await http.get(`/v2.2/films/${id}/similars`)
    const { data: filmReviews } = await http.get<IReviews>(`/v2.2/films/${id}/reviews`)
    return { filmData, filmsSimilar, filmReviews, }
}

export default async function FilmComponent({ params: { id } }: { params: { id: string } }) {
    const { filmData, filmReviews, filmsSimilar, } = await getFilm(id)

    return (
        <Film filmData={filmData} filmReviews={filmReviews} filmsSimilar={filmsSimilar} />
    )
}
