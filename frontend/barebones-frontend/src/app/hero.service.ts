import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const ofHeroes = of(HEROES);
    ofHeroes.subscribe(_ => this.messageService.add('HeroService: fetched heroes'));
    return ofHeroes;
  }
}
