import { VIEW_MOVIE } from "../actionTypes";

let initialState = {
  allIds: [],
  byIds: {}
};
for(let i=0;i<20;i+=4){
  let id0 = i;
  let id1 = i+1;
  let id2 = i+2;
  let id3 = i+3;
  initialState.allIds = initialState.allIds.concat([id0, id1, id2, id3]);
  initialState.byIds[id0] = {title: "Along with the gods", type:"Fiction", releaseDate: "2018-12-12", voteAverage: "5", overView: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.", posterImage: "./assets/images/Along_With_The_Gods-_The_Two_Worlds-TP-770x1100.jpg", productionCompanyList: [{id: id0, name: "Company"+id0}, {id: id0 + "" + id0, name: "Company"+id0+""+id0}]};
  initialState.byIds[id1] = {title: "Star Wars - Rogue One", type:"Fiction", releaseDate: "2018-12-12", voteAverage: "5", overView: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.", posterImage: "./assets/images/star-wars-rogue-one.jpg", productionCompanyList: [{id: id1, name: "Company"+id1}, {id: id1 + "" + id1, name: "Company"+id1+""+id1}]};
  initialState.byIds[id2] = {title: "The lord of the ring", type:"Fiction", releaseDate: "2018-12-12", voteAverage: "5", overView: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.", posterImage: "./assets/images/the-lord-of-the-rings-return-of-the-king.jpg", productionCompanyList: [{id: id2, name: "Company"+id2}, {id: id2 + "" + id2, name: "Company"+id2+""+id2}]};
  initialState.byIds[id3] = {title: "The last samurai", type:"Fiction", releaseDate: "2018-12-12", voteAverage: "5", overView: "Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.", posterImage: "./assets/images/last_samurai1.jpg", productionCompanyList: [{id: id3, name: "Company"+id3}, {id: id3 + "" + id3, name: "Company"+id3+""+id3}]};
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
