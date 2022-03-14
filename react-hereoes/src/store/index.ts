import { HeroesStateModel, heroesStore } from "./heroes";
import { createStore, combineReducers } from "redux";

export interface AppStateModel {
  heroes: HeroesStateModel;
}

export const store = createStore(
  combineReducers({
    heroes: heroesStore,
  })
);
