import { HeroesStateModel } from "./types";
import { Actions } from "./actions";
import heroes from "../../data/heroes.json";

const initState: HeroesStateModel = {
  heroes: heroes,
  topHeroes: [3, 12, 7, 6],
};

export function heroesStore(
  state: HeroesStateModel = initState,
  { type, payload }: Actions
): HeroesStateModel {
  switch (type) {
    case "UpdateHero":
      return {
        ...state,
        heroes: state.heroes.map((hero) => {
          if (hero.id === payload.id) {
            return { ...hero, name: payload.name };
          }
          return hero;
        }),
      };

    default:
      return state;
  }
}
