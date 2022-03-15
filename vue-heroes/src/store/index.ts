import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import heroes from "@/data/heroes.json";

Vue.use(Vuex);

export class Hero {
  constructor(public id: number, public name: string) {}
}

export type TopHeros = [number, number, number, number];

export interface HeroesStateModel {
  heroes: Hero[];
  topHeroes: TopHeros;
}

export enum Actions {
  UPDATE_HERO = "UPDATE_HERO",
}

type Ctx = ActionContext<HeroesStateModel, HeroesStateModel>;

export default new Vuex.Store<HeroesStateModel>({
  state: {
    heroes,
    topHeroes: [3, 12, 7, 6],
  },
  getters: {
    topHeroes(state: HeroesStateModel): Hero[] {
      const heroSet = new Set(state.topHeroes);
      return state.heroes.filter((hero) => heroSet.has(hero.id));
    },
    heroById(state: HeroesStateModel) {
      return (id: number) => {
        return state.heroes.find((hero) => hero.id === id);
      };
    },
  },
  actions: {
    [Actions.UPDATE_HERO](ctx: Ctx, payload: Hero) {
      const idx = ctx.state.heroes.findIndex((hero) => hero.id === payload.id);
      if (idx === -1) {
        ctx.state.heroes[idx].name = payload.name;
      }
    },
  },
});
