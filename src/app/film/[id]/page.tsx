import { http } from "@/http/http";
import { Film } from "@/pagesComponents/Film/Film";
import { IFilmAwards, IFilmFacts, IFilmImages, IFilmTrailer, IFullFilm, IPrequels, IReviews, IStaff } from "@/types/IFilm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Film'
}

async function getFilm(id: string) {
    // const { data: filmStaffs } = await http.get<IStaff[]>(`/v1/staff/`, { params: { filmId: id } })
    // const { data: filmsPrequels } = await http.get<IPrequels>(`/v2.1/films/${id}/sequels_and_prequels`)
    const { data: filmData } = await http.get<IFullFilm>(`/v2.2/films/${id}`)
    const { data: filmsSimilar } = await http.get(`/v2.2/films/${id}/similars`)
    const { data: filmReviews } = await http.get<IReviews>(`/v2.2/films/${id}/reviews`)
    const { data: filmFacts } = await http.get<IFilmFacts>(`/v2.2/films/${id}/facts`)
    const { data: filmImages } = await http.get<IFilmImages>(`/v2.2/films/${id}/images`)
    const { data: filmAwards } = await http.get<IFilmAwards>(`/v2.2/films/${id}/awards`)
    const { data: filmTrailer } = await http.get<IFilmTrailer>(`/v2.2/films/${id}/videos`)

    return { filmData, filmsSimilar, filmReviews, filmFacts, filmImages, filmAwards, filmTrailer }
}

export default async function FilmComponent({ params: { id } }: { params: { id: string } }) {
    const { filmData, filmReviews, filmsSimilar, filmFacts, filmImages, filmAwards, filmTrailer } = await getFilm(id)

    return (
        <Film
            filmData={filmData}
            filmReviews={filmReviews}
            filmsSimilar={filmsSimilar}
            filmFacts={filmFacts}
            filmImages={filmImages}
            filmAwards={filmAwards}
            filmTrailer={filmTrailer}
        />
    )
}
