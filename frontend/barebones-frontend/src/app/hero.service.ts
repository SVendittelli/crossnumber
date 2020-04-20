import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const ofHeroes = of(HEROES);
    ofHeroes.subscribe(_ => this.messageService.add('HeroService: fetched heroes'));
    return ofHeroes;
  }

  getTopHeroes(count): Observable<Hero[]> {
    const ofHeroes = of(HEROES.slice(0, count));
    ofHeroes.subscribe(_ => this.messageService.add(`HeroService: fetched top ${count} heroes`));
    return ofHeroes;
  }

  getHero(id): Observable<Hero> {
    const ofHero = of(HEROES.find(hero => hero.id === id));
    ofHero.subscribe(hero => this.messageService.add(`HeroService: fetched hero #${hero.id}: ${hero.name}`));
    return ofHero;
  }
}
