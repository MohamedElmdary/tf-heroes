export class Hero {
  constructor(public id: number, public name: string) {}
}

export type TopHeros = [number, number, number, number];

export interface HeroesStateModel {
  heroes: Hero[];
  topHeroes: TopHeros;
}
