import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Hero, HeroesState, UpdateHero } from '@store/heroes';

@Component({
  selector: 'tf-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  hero?: Hero;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    const params = this.route.snapshot.params as { id: string };
    const id = +params.id;

    this.hero = this.store.selectSnapshot(HeroesState.heroById)(id);
  }

  back() {
    const { id, name } = this.hero!;
    this.store.dispatch(new UpdateHero(id, name));
    this.router.navigateByUrl('/');
  }
}
