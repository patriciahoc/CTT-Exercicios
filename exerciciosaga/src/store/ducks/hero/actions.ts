import { action } from "typesafe-actions";
import { HeroesAction } from "./types";

export const getHeroesRequest = (hero: any) =>
  action(HeroesAction.GET_HEROES_REQUEST, hero);

export const getHeroesSuccess = (data: any) =>
  action(HeroesAction.GET_HEROES_SUCCESS, data);

export const getHeroesFailure = () => action(HeroesAction.GET_HEROES_FAILURE);
