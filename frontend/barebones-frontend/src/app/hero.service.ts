import { HttpJsonRequestFactory } from './http-json-request-factory';
import { HeroDatabaseRequestFactory } from './hero-database-request-factory';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, MonoTypeOperatorFunction, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private requestFactory = new HeroDatabaseRequestFactory(new HttpJsonRequestFactory(this.http));

  private defaultHeroes = [];
  private defaultHero = { id: 0, name: '' };
  private defaultAny = null;

  constructor(
    private messageService: MessageService,
    public http: HttpClient
  ) { }

  public getHeroes(): Observable<Hero[]> {
    return this.requestFactory.getHeroes().pipe(
      this.messageTap(`fetched heroes`),
      catchError(this.heroesHandler('getHeroes'))
    );
  }

  public getTopHeroes(count: number): Observable<Hero[]> {
    return this.requestFactory.getHeroes().pipe(
      map(hs => hs.slice(0, count)),
      this.messageTap(heroes => `fetched top ${heroes.length} heroes`),
      catchError(this.heroesHandler(`getTopHeroes(${count})`))
    );
  }

  public getHero(id: number): Observable<Hero> {
    return this.requestFactory.getHero(id).pipe(
      this.messageTap(hero => `fetched hero #${hero.id}: ${hero.name}`),
      catchError(this.heroHandler(`getHero(${id})`))
    );
  }

  public updateHero(heroToUpdate: Hero): Observable<any> {
    return this.requestFactory.updateHero(heroToUpdate).pipe(
      this.messageTap(() => `updated hero id=${heroToUpdate.id}: ${heroToUpdate.name}`),
      catchError(this.anyHandler(`updateHero(${heroToUpdate})`))
    );
  }

  public addHero(heroToAdd: Hero): Observable<Hero> {
    return this.requestFactory.addHero(heroToAdd).pipe(
      this.messageTap(hero => `added hero #${hero.id}: ${hero.name}`),
      catchError(this.heroHandler(`addHero(${heroToAdd})`))
    );
  }

  public deleteHero(heroToDelete: Hero): Observable<any> {
    return this.requestFactory.deleteHero(heroToDelete).pipe(
      this.messageTap(() => `deleted hero #${heroToDelete.id}: ${heroToDelete.name}`),
      catchError(this.anyHandler(`deleteHero(${heroToDelete})`))
    );
  }

  private sendMessage(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private messageTap<T>(m: string | ((_: T) => string)): MonoTypeOperatorFunction<T> {
    return tap((t: T) => this.sendMessage((typeof(m) === 'string') ? m : m(t)));
  }

  private getHandler<T>(callerName, defaultValue): ((error: any) => Observable<T>) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.sendMessage(`${callerName} failed: ${error.message}`);
      return of(defaultValue);
    };
  }

  private heroesHandler(callerName: string): ((error: any) => Observable<Hero[]>) {
    return this.getHandler<Hero[]>(callerName, this.defaultHeroes);
  }
  private heroHandler(callerName: string): ((error: any) => Observable<Hero>) {
    return this.getHandler<Hero>(callerName, this.defaultHero);
  }
  private anyHandler(callerName: string): ((error: any) => Observable<any>) {
    return this.getHandler<any>(callerName, this.defaultAny);
  }
}
