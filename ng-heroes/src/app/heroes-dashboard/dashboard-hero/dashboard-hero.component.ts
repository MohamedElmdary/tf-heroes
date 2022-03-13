import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '@store/heroes';

@Component({
  selector: 'tf-dashboard-hero',
  host: {
    class: 'dashboard-hero',
  },
  template: ` <div>{{ hero.name }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeroComponent {
  @Input() hero!: Hero;
}
