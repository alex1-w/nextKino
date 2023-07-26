
export interface PersonResponseSpouses {
    "personId": number,
    "name": string | null,
    "divorced": boolean,
    "divorcedReason": string | null,
    "sex": "MALE" | "FEMALE",
    "children": number,
    "webUrl": string,
    "relation": string
}

type professionKeyPersonResponse = "WRITER" | "OPERATOR" | "EDITOR" | "COMPOSER" | "PRODUCER_USSR" | "HIMSELF" | "HERSELF" | "HRONO_TITR_MALE" | "HRONO_TITR_FEMALE" | "TRANSLATOR" | "DIRECTOR" | "DESIGN" | "PRODUCER" | "ACTOR" | "VOICE_DIRECTOR" | "UNKNOWN"

export interface PersonResponseFilms {
    "filmId": number
    "nameRu": string
    "nameEn": string
    "rating": string
    "general": boolean
    "description": string
    "professionKey": professionKeyPersonResponse
}

export interface IActor {
    "personId": number,
    "webUrl": string | null,
    "nameRu": string | null,
    "nameEn": string | null,
    "sex": "MALE" | "FEMALE" | null,
    "posterUrl": string,
    "growth": string | null,
    "birthday": string | null,
    "death": string | null,
    "age": number | null,
    "birthplace": string | null,
    "deathplace": string | null,
    "hasAwards": number | null,
    "profession": string | null,
    "facts": string,
    "spouses": PersonResponseSpouses
    "films": PersonResponseFilms[]
}
