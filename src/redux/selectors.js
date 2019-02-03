import store from "./store";

export const getMovieList = (store) => {
  return store && store.movies ? store.movies.allIds : [];
};

export const getMovieById = (store, id) => {
  return store && store.movies && store.movies.byIds ? { ...store.movies.byIds[id], id } : {};
};
  
export const getMovies = (store) => {
  return getMovieList(store).map((id) => getMovieById(store, id));
};

export const getProductionCompanyList = (store) => {
  return store && store.productionCompanies ? store.productionCompanies.allIds : [];
};

export const getProductionCompanyById = (store, id) => {
  return store && store.productionCompanies && store.productionCompanies.byIds ? { ...store.productionCompanies.byIds[id], id } : {};
}

export const getProductionCompanies = (store) => {
  return getProductionCompanyList(store).map((id) => getProductionCompanyById(store, id));
};