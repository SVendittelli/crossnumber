import { MessageService } from './message.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable, MonoTypeOperatorFunction } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { GetHeroesRequest, GetHeroRequest, UpdateHeroRequest, AddHeroRequest, DeleteHeroRequest } from './hero-service-request';


@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/heroes';

  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    public http: HttpClient
  ) { }



  ////////////////////////////////////////////////////////////////////
  /////////////  \/  Public request methods section  \/  /////////////
  ////////////////////////////////////////////////////////////////////

  public getHeroes(callback: (_: Hero[]) => void): void {
    this.makeGetHeroesRequest().pipe(
      this.messageTap(`fetched heroes`)
    ).subscribe(callback);
  }

  public getTopHeroes(count: number, callback: (_: Hero[]) => void): void {
    this.makeGetHeroesRequest().pipe(
      map(hs => hs.slice(0, count)),
      this.messageTap(heroes => `fetched top ${heroes.length} heroes`)
    ).subscribe(callback);
  }

  public getHero(id: number, callback: (_: Hero) => void): void {
    this.makeGetHeroRequest(id).pipe(
      this.messageTap(hero => `fetched hero #${hero.id}: ${hero.name}`)
    ).subscribe(callback);
  }

  public updateHero(heroToUpdate: Hero, callback: (_: any) => void): void {
    this.makeUpdateHeroRequest(heroToUpdate).pipe(
      this.messageTap(() => `updated hero id=${heroToUpdate.id}: ${heroToUpdate.name}`)
    ).subscribe(callback);
  }

  public addHero(heroName: string, callback: (_: Hero) => void): void {
    this.makeAddHeroRequest(heroName).pipe(
      this.messageTap(hero => `added hero #${hero.id}: ${hero.name}`)
    ).subscribe(callback);
  }

  public deleteHero(heroToDelete: Hero, callback?: (_: any) => void): void {
    this.makeDeleteHeroRequest(heroToDelete).pipe(
      this.messageTap(_ => `deleted hero #${heroToDelete.id}: ${heroToDelete.name}`)
    ).subscribe(callback);
  }

  ////////////////////////////////////////////////////////////////////


  private sendMessage(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private messageTap<T>(m: string | ((_: T) => string)): MonoTypeOperatorFunction<T> {
    return tap((t: T) => this.sendMessage((typeof(m) === 'string') ? m : m(t)));
  }



  ////////////////////////////////////////////////////////////////////
  /////////////  \/  HTTP requests creation section  \/  /////////////
  ////////////////////////////////////////////////////////////////////

  // GET Requests
  private get<T>(url: string = this.heroesUrl): Observable<T> {
    return this.http.get<T>(url);
  }
  private makeGetHeroesRequest(): GetHeroesRequest {
    return new GetHeroesRequest(this.get<Hero[]>(), this.sendMessage);
  }
  private makeGetHeroRequest(id: number): GetHeroRequest {
    return new GetHeroRequest(this.get<Hero>(`${this.heroesUrl}/${id}`), this.sendMessage);
  }

  // PUT Requests
  private put<T>(body: any, url: string = this.heroesUrl): Observable<T> {
    return this.http.put<T>(url, body, this.httpOptions);
  }
  private makeUpdateHeroRequest(hero: Hero): UpdateHeroRequest {
    return new UpdateHeroRequest( this.put(hero), this.sendMessage);
  }

  // POST Requests
  private post<T>(body: any, url: string = this.heroesUrl): Observable<T> {
    return this.http.post<T>(url, body, this.httpOptions);
  }
  private makeAddHeroRequest(heroName: string): AddHeroRequest {
    return new AddHeroRequest(this.post<Hero>({ name: heroName } as Hero), this.sendMessage);
  }

  // DELETE Requests
  private delete<T>(url: string): Observable<any> {
    return this.http.delete<T>(url, this.httpOptions);
  }
  private makeDeleteHeroRequest(hero: Hero): DeleteHeroRequest {
    return new DeleteHeroRequest(this.delete(`${this.heroesUrl}/${hero.id}`), this.sendMessage);
  }

  ////////////////////////////////////////////////////////////////////
}
