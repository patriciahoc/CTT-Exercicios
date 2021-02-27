export enum HeroesAction {
  GET_HEROES_REQUEST = "@hero/GET_HEROES_REQUEST",
  GET_HEROES_SUCCESS = "@hero/GET_HEROES_SUCCESS",
  GET_HEROES_FAILURE = "@hero/GET_HEROES_FAILURE",
}

export interface Hero {
  id: number;
  name: string;
  image: HeroImg;
}

export interface HeroImg {
  url: string;
}

export interface HeroesState {
  dataHero: Hero[] | undefined;
  error: boolean;
  loading: boolean;
}

export interface HeroesResponse {
  results: Hero;
}
