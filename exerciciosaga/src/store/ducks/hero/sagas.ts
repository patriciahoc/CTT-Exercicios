import { call, put } from "redux-saga/effects";

import { getHeroesSuccess, getHeroesFailure } from "./actions";
import HeroesService from "../../../services/hero-services";
import { HeroesResponse } from "./types";

export function* getHeroes(action: any) {
  try {
    const response: HeroesResponse = yield call(
      HeroesService.getHeroes,
      action.payload
    );

    yield put(getHeroesSuccess(response));
  } catch (err) {
    yield put(getHeroesFailure());
  }
}
