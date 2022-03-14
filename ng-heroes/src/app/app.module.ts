// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Libs
import { NgxsModule } from '@ngxs/store';

// Components
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';

// Store
import { HeroesState } from '@store/heroes';
import { DashboardHeroComponent } from './heroes-dashboard/dashboard-hero/dashboard-hero.component';
import { ListHeroComponent } from './heroes-list/list-hero/list-hero.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroComponent,
    HeroesDashboardComponent,
    DashboardHeroComponent,
    ListHeroComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HeroesDashboardComponent },
      { path: 'heroes', component: HeroesListComponent },
      { path: 'hero/:id', component: HeroComponent },
      { path: '**', redirectTo: '' },
    ]),
    NgxsModule.forRoot([HeroesState]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
