import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Hero, HeroesState } from '@store/heroes';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'tf-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  hero$!: Observable<Hero | undefined>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  public ngOnInit(): void {
    const params = this.route.snapshot.params as { id: string };
    const id = +params.id;

    this.hero$ = this.store
      .select(HeroesState.heroById)
      .pipe(map((byId) => byId(id)));
  }
}
