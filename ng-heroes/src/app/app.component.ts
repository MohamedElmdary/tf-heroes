import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tf-heroes',
  template: `
    <main id="app-container">
      <h1>Tour of Heroes</h1>
      <ul id="navbar">
        <li>
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Dashboard</a
          >
        </li>
        <li>
          <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
