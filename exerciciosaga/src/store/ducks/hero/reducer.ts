import { Reducer } from "redux";
import { HeroesAction, HeroesState } from "./types";

const INITIAL_STATE_HERO: HeroesState = {
  dataHero: undefined,
  error: false,
  loading: false,
};

const heroesReducer: Reducer = (state = INITIAL_STATE_HERO, action: any) => {
  switch (action.type) {
    case HeroesAction.GET_HEROES_REQUEST:
      return {
        ...state,
        loading: true,
        dataHero: undefined,
      };
    case HeroesAction.GET_HEROES_SUCCESS:
      return {
        ...state,
        loading: false,
        dataHero: action.payload.data.results || [],
      };
    case HeroesAction.GET_HEROES_FAILURE:
      return {
        loading: false,
        dataHero: undefined,
        error: true,
      };
    default:
      return state;
  }
};
export default heroesReducer;
