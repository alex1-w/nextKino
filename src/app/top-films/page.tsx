import { http } from "@/http/http"
import { TopFilms } from "@/pagesComponents/TopFilms/TopFilms"

const getTopFilms = async () => {
    const { data } = await http.get('v2.2/films/top')
    return data
}

export default async function TopFilmsComponent() {

    const top = await getTopFilms()

    return (
        <TopFilms top={top} />
    )
} 