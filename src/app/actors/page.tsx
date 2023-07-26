import { http } from "@/src/http/http"


const getActors = async () => {
    const { data } = await http.get(`/v1/staff`, )
    console.log(33);

    return data
}


export default async function ActorsComponent() {

    const actors = await getActors()
    console.log(actors);


    return (
        <div>
        </div>
    )
}