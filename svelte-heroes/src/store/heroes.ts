import { get, writable } from "svelte/store";
import heroes from "../data/heroes.json";

export class Hero {
  constructor(public id: number, public name: string) {}
}

export type TopHeros = [number, number, number, number];

export interface HeroesStateModel {
  heroes: Hero[];
  topHeroes: TopHeros;
}

function createHeroesStore() {
  const store = writable<HeroesStateModel>({
    heroes: heroes,
    topHeroes: [3, 12, 7, 6],
  });

  const { subscribe, update } = store;

  return {
    subscribe,
    get heroes(): Hero[] {
      return get(store).heroes;
    },
    get topHeroes(): Hero[] {
      const { heroes, topHeroes } = get(store);
      const heroSet = new Set(topHeroes);
      return heroes.filter((h) => heroSet.has(h.id));
    },
    updateHero(id: number, name: string) {
      return update((state) => {
        const idx = state.heroes.findIndex((h) => h.id === id);
        if (idx > -1) {
          state.heroes[idx].name = name;
        }
        return state;
      });
    },
  };
}

export default createHeroesStore();
