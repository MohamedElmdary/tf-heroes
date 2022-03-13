import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '@store/heroes';

@Component({
  selector: 'tf-list-hero',
  templateUrl: './list-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListHeroComponent {
  @Input() hero!: Hero;
}
