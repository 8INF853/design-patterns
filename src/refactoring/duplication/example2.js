import Collection from "./collection"

export default class MovieList {
  constructor() {
    this.numberOfMovies = 0
    this.movies = []
  }

  size() {
    this.movies.length
  }

  add(movie) {
    movies.push(movie)
    this.numberOfMovies++
  }
}