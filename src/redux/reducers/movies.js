import { VIEW_MOVIE } from "../actionTypes";

const initialState = {
  allIds: [1, 2, 3],
  byIds: {
    1: {title: "Title1", releaseDate: "2018-12-12", voteAverage: "3", overView: "", posterImage: "", productionCompanyList: [{id: 1, name: "Company1"}]}, 
    2: {title: "Title2", releaseDate: "2018-12-12", voteAverage: "4", overView: "", posterImage: "", productionCompanyList: [{id: 2, name: "Company2"}]}, 
    3: {title: "Title3", releaseDate: "2018-12-12", voteAverage: "5", overView: "", posterImage: "", productionCompanyList: [{id: 3, name: "Company3"}]}
  }  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_MOVIE: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id]
          }
        }
      };
    }
    default:
      return state;
  }
}