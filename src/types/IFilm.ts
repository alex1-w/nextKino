// import { ITopFilms, ICountry, IGenre } from './IFilm';

export interface IFilm {
    kinopoiskId: number,
    imdbId: string | null,
    nameRu: string | null,
    nameEn: string | null,
    nameOriginal: string | null,
    countries: ICountry[],
    genres: IGenre[],
    ratingKinopoisk: number | null,
    ratingImdb: number | null,
    year: number | null,
    type: FilmVariants,
    posterUrl: string,
    posterUrlPreview: string
}
export interface ICountry {
    country: string,
}
export interface IGenre {
    genre: string,
}
type FilmVariants = 'FILM' | 'TV_SHOW' | 'VIDEO' | 'MINI_SERIES' | 'TV_SERIES' | 'UNKNOWN'


export interface IFilmResponse {
    total: number,
    totalPages: number,
    items: IFilm[],
}

export interface IFullFilm {
    "kinopoiskId": number,
    "imdbId": string,
    "nameRu": string,
    "nameEn": string,
    "nameOriginal": string,
    "posterUrl": string,
    "posterUrlPreview": string,
    "coverUrl": string,
    "logoUrl": string,
    "reviewsCount": number,
    "ratingGoodReview": number,
    "ratingGoodReviewVoteCount": number,
    "ratingKinopoisk": number,
    "ratingKinopoiskVoteCount": number,
    "ratingImdb": number,
    "ratingImdbVoteCount": number,
    "ratingFilmCritics": number,
    "ratingFilmCriticsVoteCount": number,
    "ratingAwait": number,
    "ratingAwaitCount": number,
    "ratingRfCritics": number,
    "ratingRfCriticsVoteCount": number,
    "webUrl": string,
    "year": number,
    "filmLength": number,
    "slogan": string,
    "description": string,
    "shortDescription": string,
    "editorAnnotation": string,
    "isTicketsAvailable": false,
    "productionStatus": string,
    "type": string,
    "ratingMpaa": string,
    "ratingAgeLimits": string,
    "hasImax": false,
    "has3D": false,
    "lastSync": string,
    "countries": ICountry[],
    "genres": IGenre[],
    "startYear": number,
    "endYear": number,
    "serial": false,
    "shortFilm": false,
    "completed": false
}

export interface IPremieresFilmResponse {

    total: number,
    items: IPremieresFilm[]
}

export interface IPremieresFilm {
    kinopoiskId: number,
    nameRu: string | null,
    nameEn: string | null,
    year: number,
    posterUrl: string,
    posterUrlPreview: string,
    countries: ICountry[],
    genres: IGenre[],
    duration: number | null,
    premiereRu: string
}
type ProfessionVariants = "WRITER" | "OPERATOR" | "EDITOR" | "COMPOSER" | "PRODUCER_USSR" | "TRANSLATOR" | "DIRECTOR" | "DESIGN" | "PRODUCER" | "ACTOR" | "VOICE_DIRECTOR" | "UNKNOWN"

export interface IStaff {
    "staffId": number,
    "nameRu": string | null,
    "nameEn": string | null,
    "description": string | null,
    "posterUrl": string,
    "professionText": string,
    "professionKey": ProfessionVariants
}

type RelationType = 'SEQUEL' | 'PREQUEL' | 'REMAKE' | 'UNKNOWN'

export interface IPrequels {
    "filmId": number,
    "nameRu": string,
    "nameEn": string,
    "nameOriginal": string,
    "posterUrl": string,
    "posterUrlPreview": string,
    "relationType": RelationType
}

export interface ITopFilms {
    'filmId': number,
    'nameRu': string | null,
    'nameEn': string | null,
    'year': string | null,
    'filmLength': string | null,
    'countries': ICountry[],
    'genres': IGenre[],
    'rating': number | null,
    'ratingVoteCount': number | null,
    'posterUrl': string,
    'posterUrlPreview': string
}

export interface ITop {
    "pagesCount": number,
    "films": ITopFilms[]
}

export interface ReviewItems {
    'kinopoiskId': number,
    'type': ITypes,
    'date': string,
    'positiveRating': number,
    'negativeRating': number
    'author': string,
    'title': string,
    'description': string,
}
export interface IReviews {
    'total': number
    'totalPages': number
    'totalPositiveReviews': number
    'totalNegativeReviews': number
    'totalNeutralReviews': number
    'items': ReviewItems[]
}
export type ITypes = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'UNKNOWN'

export interface SimilarItems {
    'filmId': number
    'nameRu': string
    'nameEn': string
    'nameOriginal': string
    'posterUrl': string
    'relationType': 'SIMILAR'
}

export interface IFilmsSimilar {
    'total': number
    'items': SimilarItems[]
}

export interface ISearchFilms {
    "keyword": string,
    "pagesCount": number,
    "searchFilmsCountResult": number,
    "films": IFilm[] | null
}

export interface IFilmFacts {
    "total": number,
    "items": IFilmFact[]
}

export interface IFilmFact {
    "text": string
    "type": "FACT" | "BLOOPER"
    "spoiler": false
}


export interface IFilmImages {
    "total": number,
    "totalPages": number,
    "items": IFilmImage[]
}

export interface IFilmImage {
    "imageUrl": string,
    "previewUrl": string
}


export interface IFilmAwards {
    "total": number,
    "items": IAward[]
}

export interface IAward {
    "name": string,
    "win": boolean,
    "imageUrl": string,
    "nominationName": string,
    "year": number,
    "persons": IAwardPerson[]
}

export interface IAwardPerson {
    "kinopoiskId": number,
    "webUrl": string,
    "nameRu": string,
    "nameEn": string,
    "sex": string,
    "posterUrl": string,
    "growth": number,
    "birthday": string,
    "death": string,
    "age": number,
    "birthplace": string,
    "deathplace": string,
    "profession": string
}



export interface IFilmTrailer {
    "total": number,
    "items": ITrailer[]
}

export interface ITrailer {
    "url": string,
    "name": string,
    "site": string
}