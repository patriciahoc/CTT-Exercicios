import { takeLatest, all } from "redux-saga/effects";

import { HeroesAction } from "./hero/types";
import { getHeroes } from "./hero/sagas";

export default function* rootSaga(): any {
  return yield all([takeLatest(HeroesAction.GET_HEROES_REQUEST, getHeroes)]);
}
