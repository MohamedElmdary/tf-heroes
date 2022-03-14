import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { HeroesState, UpdateHero } from '@store/heroes';

@Component({
  selector: 'tf-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  heroForm?: FormGroup;

  get id(): FormControl | undefined {
    return this.heroForm?.get('id') as FormControl;
  }

  get name(): FormControl | undefined {
    return this.heroForm?.get('name') as FormControl;
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store,
    private readonly location: Location,
    private readonly fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    const params = this.route.snapshot.params as { id: string };
    const id = +params.id;

    const hero = this.store.selectSnapshot(HeroesState.heroById)(id);

    if (hero) {
      this.heroForm = this.fb.group({
        id: [hero.id],
        name: [hero.name, [Validators.required]],
      });

      this.heroForm.get('id')!.disable();
    }
  }

  back() {
    this.store.dispatch(new UpdateHero(this.id!.value, this.name!.value));
    this.location.back();
  }
}
