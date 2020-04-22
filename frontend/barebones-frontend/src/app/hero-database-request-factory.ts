import { Hero } from './hero';
import { Observable } from 'rxjs';
import { HttpJsonRequestFactory } from './http-json-request-factory';

export class HeroDatabaseRequestFactory {
  private url = 'api/heroes';

  constructor(private httpRequests: HttpJsonRequestFactory) { }

  // GET Requests
  public getHeroes(searchTerm?: string): Observable<Hero[]> {
    return this.httpRequests.get<Hero[]>(this.url + (searchTerm ? `/?name=${searchTerm}` : ''));
  }
  public getHero(id: number): Observable<Hero> {
    return this.httpRequests.get<Hero>(`${this.url}/${id}`);
  }

  // PUT Requests
  public updateHero(hero: Hero): Observable<any> {
    return this.httpRequests.put(this.url, hero);
  }

  // POST Requests
  public addHero(hero: Hero): Observable<Hero> {
    return this.httpRequests.post<Hero>(this.url, hero);
  }

  // DELETE Requests
  public deleteHero(hero: Hero): Observable<any> {
    return this.httpRequests.delete(`${this.url}/${hero.id}`);
  }
}
