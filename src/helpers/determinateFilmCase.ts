export const determinateFilmCaseHelper = (filmsCount: number): string => {
    const words = ["фильм", "фильма", "фильмов"]

    // if (filmsCount % 10 === 2 || 3 || 4) {
    //     console.log(filmsCount % 10);
    //     return words[1]
    // }
    // if (filmsCount % 10 === 1) {
    //     return words[0]
    // }
    // if (filmsCount % 10 === 5 || 6 || 7 || 8 || 9) {
    //     return words[2]
    // }        
    return (filmsCount % 10 === 2 || 3 || 4) ? words[1] : (filmsCount % 10 === 1) ? words[0] : words[2]
}