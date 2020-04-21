import { Hero } from './hero';
import { catchError } from 'rxjs/operators';
import { Observable, Subscription, of, OperatorFunction, PartialObserver } from 'rxjs';

abstract class HeroServiceRequest<T> {
  constructor(
    private request: Observable<T>,
    private sender: (_: string) => void,
    private requestName: string,
    private defaultValue: T
  ) { }

  /* tslint:disable: max-line-length */
  pipe(): HeroServiceRequest<T>;
  pipe<A>(op1: OperatorFunction<T, A>): HeroServiceRequest<A>;
  pipe<A, B>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>): HeroServiceRequest<B>;
  pipe<A, B, C>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>): HeroServiceRequest<C>;
  pipe<A, B, C, D>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>): HeroServiceRequest<D>;
  pipe<A, B, C, D, E>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>): HeroServiceRequest<E>;
  pipe<A, B, C, D, E, F>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>): HeroServiceRequest<F>;
  pipe<A, B, C, D, E, F, G>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>): HeroServiceRequest<G>;
  pipe<A, B, C, D, E, F, G, H>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>): HeroServiceRequest<H>;
  pipe<A, B, C, D, E, F, G, H, I>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>): HeroServiceRequest<I>;
  pipe<A, B, C, D, E, F, G, H, I>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>, ...operations: OperatorFunction<any, any>[]): HeroServiceRequest<{}>;
  /* tslint:enable: max-line-length */
  pipe(...args: any[]): HeroServiceRequest<any> {
    this.request = this.request.pipe.apply(this.request, args);
    return this;
  }

  subscribe(observer?: PartialObserver<T>): Subscription;
  /** @deprecated Use an observer instead of a complete callback */
  subscribe(next: null | undefined, error: null | undefined, complete: () => void): Subscription;
  /** @deprecated Use an observer instead of an error callback */
  subscribe(next: null | undefined, error: (error: any) => void, complete?: () => void): Subscription;
  /** @deprecated Use an observer instead of a complete callback */
  subscribe(next: (value: T) => void, error: null | undefined, complete: () => void): Subscription;
  subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
  subscribe(...args: any[]): Subscription {
    return this.request.pipe(catchError(this.handleError())).subscribe(...args);
  }

  private handleError(): ((error: any) => Observable<T>) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.sender(`${this.requestName} failed: ${error.message}`);
      return of(this.defaultValue);
    };
  }
}



////////////////////////////////////////////////////////////////////
////////////////////  \/  Derived classes  \/  /////////////////////
////////////////////////////////////////////////////////////////////

const defaultHeroes = [];
const defaultHero = { id: 0, name: '' };
const defaultAny = null;

export class GetHeroesRequest extends HeroServiceRequest<Hero[]> {
  constructor(request, sender) { super(request, sender, 'GetHeroesRequest', defaultHeroes); }
}
export class GetHeroRequest extends HeroServiceRequest<Hero> {
  constructor(request, sender) { super(request, sender, 'GetHeroRequest', defaultHero); }
}
export class UpdateHeroRequest extends HeroServiceRequest<any> {
  constructor(request, sender) { super(request, sender, 'UpdateHeroRequest', defaultAny); }
}
export class AddHeroRequest extends HeroServiceRequest<Hero> {
  constructor(request, sender) { super(request, sender, 'AddHeroRequest', defaultHero); }
}
export class DeleteHeroRequest extends HeroServiceRequest<any> {
  constructor(request, sender) { super(request, sender, 'DeleteHeroRequest', defaultAny); }
}

////////////////////////////////////////////////////////////////////
