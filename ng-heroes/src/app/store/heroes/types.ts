export class Hero {
  constructor(public readonly id: number, public name: string) {}
}

export type TopHeros = [number, number, number, number];

export interface HeroesStateModel {
  heroes: Hero[];
  topHeroes: TopHeros;
}
