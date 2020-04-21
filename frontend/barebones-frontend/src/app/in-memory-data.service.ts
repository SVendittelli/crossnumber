import { Hero } from './hero';
import { HEROES } from './default-heroes';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return { heroes: HEROES };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
