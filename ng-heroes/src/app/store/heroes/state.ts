import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UpdateHero } from './actions';
import { Hero, HeroesStateModel } from './types';
import { patch, updateItem } from '@ngxs/store/operators';

const heroes: Hero[] = require('@data/heroes.json');

type Ctx = StateContext<HeroesStateModel>;

@State<HeroesStateModel>({
  name: 'heroes',
  defaults: {
    heroes,
    topHeroes: [3, 12, 7, 6],
  },
})
export class HeroesState {
  @Selector()
  public static heroes(state: HeroesStateModel): Hero[] {
    return state.heroes;
  }

  @Selector()
  public static topHeroes(state: HeroesStateModel): Hero[] {
    const heroSet = new Set(state.topHeroes);
    return state.heroes.filter((hero) => heroSet.has(hero.id));
  }

  @Selector()
  public static heroById(state: HeroesStateModel) {
    return (id: number) => {
      return state.heroes.find((hero) => hero.id === id);
    };
  }

  @Action(UpdateHero)
  public onUpdateHero(ctx: Ctx, { id, name }: UpdateHero) {
    ctx.setState(
      patch<HeroesStateModel>({
        heroes: updateItem(
          (hero) => hero?.id === id,
          patch({
            name,
          })
        ),
      })
    );
  }
}
