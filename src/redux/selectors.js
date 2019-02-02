import store from "./store";

export const getMovieList = (store) => {
  console.log("getMovieList");
  //console.log(store.movies.allIds);
  return [1, 2, 3];
  return store && store.movies ? store.movies.allIds : [1, 2, 3];
}

export const getMovieById = (store, id) => {
  return {id: id, content: "toto"};
  //store && store.movies && store.movies.byIds ? { ...store.movies.byIds[id], id } : {};
}
  
export const getMovies = (store) =>
  getMovieList(store).map((id) => getMovieById(store, id));