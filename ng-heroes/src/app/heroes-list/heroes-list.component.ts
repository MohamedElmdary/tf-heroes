import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Hero, HeroesState } from '@store/heroes';
import { Observable } from 'rxjs';

@Component({
  selector: 'tf-heroes-list',
  templateUrl: './heroes-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesListComponent {
  @Select(HeroesState.heroes) readonly heroes$!: Observable<Hero[]>;
}
