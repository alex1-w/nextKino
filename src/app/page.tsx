import styles from './page.module.scss'
import { IPremieresFilmResponse, ITop } from '../types/IFilm'
import { http } from '../http/http'
import { HomePage } from '@/pagesComponents/HomePage/HomePage'

const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

async function getPremieres() {
  const { data } = await http.get<IPremieresFilmResponse>('/v2.2/films/premieres', {
    params: {
      year: new Date().getFullYear(),
      month: months[new Date().getMonth() - 1],
    }
  })
  return data
}

async function getFilms() {
  const { data } = await http.get<ITop>('/v2.2/films/top')
  return data
}

export default async function Home() {
  const topFilms = await getFilms()
  const premieres = await getPremieres()

  return (
    <HomePage premierFilms={premieres} topFilms={topFilms} />
  )
}
