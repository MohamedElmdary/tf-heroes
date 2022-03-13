import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Hero, HeroesState } from '@store/heroes';
import { Observable } from 'rxjs';

@Component({
  selector: 'tf-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesDashboardComponent {
  @Select(HeroesState.topHeroes) readonly heroes$!: Observable<Hero[]>;
}
